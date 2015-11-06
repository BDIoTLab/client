'use strict'

import * as SearchActions from '../constants/search'
import { routeAppend, getCurrentURI } from './router'
import { loadSummaries } from './profile'
import engine from '../engine'
import * as _ from 'lodash'

export function initSearch (base) {
  return { type: SearchActions.INIT_SEARCH, base }
}

export function pushNewSearch () {
  return function (dispatch, getState) {
    dispatch(initSearch(getCurrentURI(getState())))
    dispatch(routeAppend('search'))
  }
}

export function selectService (base, service) {
  return { type: SearchActions.SEARCH_SERVICE, base, service }
}

let next_nonce = 0

const submitSearch_debounced = _.debounce((base, term, dispatch, getState) => {
  const nonce = next_nonce++

  dispatch({
    base,
    nonce,
    type: SearchActions.SEARCH_RUNNING
  })

  const bad_nonce = () => (getState().search.getIn([base, 'nonce']) !== nonce)

  const doRPC = (...args) => new Promise((resolve, reject) => {
    engine.rpc(...args, (error, results) => {
      if (bad_nonce()) { return }
      if (error) { throw new Error(error) }
      if (results) {
        dispatch(loadSummaries(results.map(r => r.uid)))
      }
      resolve(results || [])
    })
  })

  Promise.all([
    doRPC('user.listTracking', {filter: term}, {}).then(results => {
      return results.map(r => ({ uid: r.uid, username: r.username, tracking: true }))
    }),
    doRPC('user.search', {query: term}, {}).then(results => {
      return results.map(r => ({ uid: r.uid, username: r.username }))
    })
  ])
    .then(results => {
      const trackingUsernames = new Set(results[0].map(u => u.uid))
      dispatch({
        type: SearchActions.SEARCH_RESULTS,
        base,
        results: results[0].concat(results[1].filter(r => !trackingUsernames.has(r.uid)))
      })
    })
    .catch(err => dispatch({
      type: SearchActions.SEARCH_RESULTS,
      base,
      error: err
    }))
}, 150)

export function submitSearch (base, term) {
  return (dispatch, getState) => {
    if (term === '') {
      // Clears any existing search results
      return dispatch(initSearch(base))
    }
    dispatch({
      type: SearchActions.SEARCH_TERM,
      base,
      term
    })
    submitSearch_debounced(base, term, dispatch, getState)
  }
}
