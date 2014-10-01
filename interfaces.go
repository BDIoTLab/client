
package libkbgo

/*
 * Interfaces
 *
 *   Here are the interfaces that we're going to assume when
 *   implementing the features of command-line clients or
 *   servers.  Depending on the conext, we might get different
 *   instantiations of these interfaces.
 */

type CommandLine interface {
	GetHome() string
	GetServerUrl() string
	GetConfigFilename() string
}

type Server interface {

}

type LocalCache interface {

}

type Config interface {
	GetHome() string
	GetServerUrl() string
	GetConfigFilename() string
}

type HttpRequest interface {
	SetEnvironment(env Env)
}

type Keychain interface {

}

type ProofCheckers interface {

}

type Logger interface {

}

type Pinentry interface {

}
