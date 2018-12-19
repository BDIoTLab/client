// @noflow // not using flow at all
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.
// Not enabled: calls need to be turned on in enabled-calls.json
import {call} from 'redux-saga/effects'
import {getEngine as engine, getEngineSaga} from '../../engine/require'

export const bundleAccountBundleVersion = {
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  v5: 5,
  v6: 6,
  v7: 7,
  v8: 8,
  v9: 9,
  v10: 10,
}

export const bundleAccountMode = {
  none: 0,
  user: 1,
  mobile: 2,
}

export const bundleBundleVersion = {
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  v5: 5,
  v6: 6,
  v7: 7,
  v8: 8,
  v9: 9,
  v10: 10,
}

export const commonPaymentStrategy = {
  none: 0,
  direct: 1,
  relay: 2,
}

export const commonRelayDirection = {
  claim: 0,
  yank: 1,
}

export const commonRequestStatus = {
  ok: 0,
  canceled: 1,
}

export const commonTransactionStatus = {
  none: 0,
  pending: 1,
  success: 2,
  errorTransient: 3,
  errorPermanent: 4,
}

export const localBalanceDelta = {
  none: 0,
  increase: 1,
  decrease: 2,
}

export const localInflationDestinationType = {
  self: 1,
  accountid: 2,
  lumenaut: 3,
}

export const localParticipantType = {
  none: 0,
  keybase: 1,
  stellar: 2,
  sbs: 3,
  ownaccount: 4,
}

export const localPaymentStatus = {
  none: 0,
  pending: 1,
  claimable: 2,
  completed: 3,
  error: 4,
  unknown: 5,
  canceled: 6,
}

export const remotePaymentSummaryType = {
  none: 0,
  stellar: 1,
  direct: 2,
  relay: 3,
}
export const localAcceptDisclaimerLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.acceptDisclaimerLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localBuildPaymentLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.buildPaymentLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localBuildRequestLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.buildRequestLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localCancelPaymentLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.cancelPaymentLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localCancelRequestLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.cancelRequestLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localChangeDisplayCurrencyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.changeDisplayCurrencyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localChangeWalletAccountNameLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.changeWalletAccountNameLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localCreateWalletAccountLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.createWalletAccountLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localDeleteWalletAccountLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.deleteWalletAccountLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetAccountAssetsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getAccountAssetsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetDisplayCurrenciesLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getDisplayCurrenciesLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetDisplayCurrencyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getDisplayCurrencyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetPaymentDetailsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getPaymentDetailsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetPaymentsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getPaymentsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetPendingPaymentsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getPendingPaymentsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetRequestDetailsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getRequestDetailsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetSendAssetChoicesLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getSendAssetChoicesLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetWalletAccountLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getWalletAccountLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetWalletAccountSecretKeyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getWalletAccountSecretKeyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetWalletAccountsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.getWalletAccountsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localHasAcceptedDisclaimerLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.hasAcceptedDisclaimerLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localIsAccountMobileOnlyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.isAccountMobileOnlyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localLinkNewWalletAccountLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.linkNewWalletAccountLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localMakeRequestLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.makeRequestLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localMarkAsReadLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.markAsReadLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSendPaymentLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.sendPaymentLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetAccountAllDevicesLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.setAccountAllDevicesLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetAccountMobileOnlyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.setAccountMobileOnlyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetWalletAccountAsDefaultLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.setWalletAccountAsDefaultLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localValidateAccountNameLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.validateAccountNameLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localValidateSecretKeyLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'stellar.1.local.validateSecretKeyLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
