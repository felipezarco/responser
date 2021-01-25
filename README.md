# Responser

> A simple way to send standard HTTP responses in your Node/Express application.

![vscode suggestions](https://raw.githubusercontent.com/felipezarco/files/master/images/screenshots/responser.png "Responser typescript methods suggestion")

While creating an API, a programmer should not always need to be concerned about the status code and the data type of your responses. Responser gives you a simple way of returning basic REST API responses for each one of the HTTP status codes availables.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/responser.svg)](https://badge.fury.io/js/felipezarco%2Fresponser) [![Build Status](https://travis-ci.org/felipezarco/responser.svg?branch=master)](https://travis-ci.org/felipezarco/responser) [![Coverage Status](https://coveralls.io/repos/github/felipezarco/responser/badge.svg?branch=master)](https://coveralls.io/github/felipezarco/responser?branch=master) ![Downloads](https://img.shields.io/npm/dw/responser)

[![npm](https://nodei.co/npm/responser.png)](https://www.npmjs.com/package/responser)

## Installation

The latest version is available at: https://www.npmjs.com/package/responser

Use your favorite package manager to install. For instance: 

```
  yarn add responser
```

Then import it:

```javascript
import responser from 'responser'
```

Or, for commonjs:

```javascript
const responser = require('responser')
```

**Add responser as an express middleware**:

```javascript
app.use(responser)
```

And you're good to go!

## Usage

Since responser overwrites Express' interface, you can find the responser send_* methods directly in the express response.  

Methods accept two parameters:  

* Required: message (string)
* Optional: data || errors (any | undefiend)

Consider the following code which has a `response` local variable (the name does not matter given its type is `Response`):

```javascript
import { Request, Response } from 'express'

class PlanetController {

  async index(request: Request, response: Response) {

    const planets = [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ]

    return response.send_ok('Planets were found successfully!', {
      planets
    })
  }
}

export default new PlanetController()
```

The above code generates the following response:

```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "code": 200,
  "status": "OK",
  "message": "Planets were found successfully!",
  "success": true,
  "data": {
    "planets": [
       "Mercury",
       "Venus",
       "Earth",
       "Mars",
       "Jupiter",
       "Saturn",
       "Uranus",
       "Neptune"
     ]
  }
}
```

An example of unsuccessful response would be:

```javascript
import { Request, Response } from 'express'

class PlanetController {

  async post(request: Request, response: Response) {

    const { planetName, planetSize } = request.body

    let invalid = []

    if(!planetName) invalid.push(
      { name: 'planetName', message: 'The planet name was not given!' }
    )

    // ...

    if(invalid.length) return response.send_badRequest(
      'The request contains one or more errors!', invalid
    )

    // ...

  }
}

export default new PlanetController()
```

Which outputs:  

```javascript
  {
    status: 'BAD_REQUEST',
    code: 400,
    message: 'The request contains one or more errors!',
    success: false,
    errors: [
      { name: 'planetName', message: 'The planet name was not given!' }
    ]
  }
```

Where:

* `code` is a number HTTP Status Code;

* `status` is a string with the name of the HTTP Status;

* `success` is a boolean which is true for 1XX and 2XX HTTP Status Codes;

* `data` **or** `errors` is the key name for given payload (responser second argument). It is `undefined` if none is given.

**Note**: `data` is the key name when `success` is `true` while `errors` is the key when `success` is `false`.

## Methods

 With typescript, you can easily access all methods by typing `.send_` in your response variable. The following methods are currently available (method, code and status).

```javascript
send_continue                      100 // Continue
send_switchingProtocols            101 // Switching Protocols
send_processing                    102 // Processing
send_ok                            200 // OK
send_created                       201 // Created
send_accepted                      202 // Accepted
send_nonAuthoritativeInformation   203 // Non Authoritative Information
send_noContent                     204 // No Content
send_resetContent                  205 // Reset Content
send_partialContent                206 // Partial Content
send_multiStatus                   207 // Multi-Status
send_multipleChoices               300 // Multiple Choices
send_movedPermanently              301 // Moved Permanently
send_movedTemporarily              302 // Moved Temporarily
send_seeOther                      303 // See Other
send_notModified                   304 // Not Modified
send_useProxy                      305 // Use Proxy
send_temporaryRedirect             307 // Temporary Redirect
send_permanentRedirect             308 // Permanent Redirect
send_badRequest                    400 // Bad Request
send_unauthorized                  401 // Unauthorized
send_paymentRequired               402 // Payment Required
send_forbidden                     403 // Forbidden
send_notFound                      404 // Not Found
send_methodNotAllowed              405 // Method Not Allowed
send_notAcceptable                 406 // Not Acceptable
send_proxyAuthenticationRequired   407 // Proxy Authentication Required
send_requestTimeout                408 // Request Timeout
send_conflict                      409 // Conflict
send_gone                          410 // Gone
send_lengthRequired                411 // Length Required
send_preconditionFailed            412 // Precondition Failed
send_requestTooLong                413 // Request Entity Too Large
send_requestUriTooLong             414 // Request-URI Too Long
send_unsupportedMediaType          415 // Unsupported Media Type
send_requestedRangeNotSatisfiable  416 // Requested Range Not Satisfiable
send_expectationFailed             417 // Expectation Failed
send_imATeapot                     418 // I'm a teapot
send_insufficientSpaceOnResource   419 // Insufficient Space on Resource
send_methodFailure                 420 // Method Failure
send_unprocessableEntity           422 // Unprocessable Entity
send_locked                        423 // Locked
send_failedDependency              424 // Failed Dependency
send_preconditionRequired          428 // Precondition Required
send_tooManyRequests               429 // Too Many Requests
send_requestHeaderFieldsTooLarge   431 // Request Header Fields Too Large
send_unavailableForLegalReasons    451 // Unavailable For Legal Reasons
send_internalServerError           500 // Internal Server Error
send_notImplemented                501 // Not Implemented
send_badGateway                    502 // Bad Gateway
send_serviceUnavailable            503 // Service Unavailable
send_gatewayTimeout                504 // Gateway Timeout
send_httpVersionNotSupported       505 // HTTP Version Not Supported
send_insufficientStorage           507 // Insufficient Storage
send_networkAuthenticationRequired 511 // Network Authentication Required
```

## Testing

Run the test suit with `yarn test`.

## Contributing

If you want to contribute in any of theses ways:

- Give your ideas or feedback
- Question something
- Point out a problem or issue
- Enhance the code or its documentation
- Help in any other way

You can (and should) [open an issue](https://github.com/felipezarco/responser/issues/new) or even a [pull request](https://github.com/felipezarco/responser/compare)!

Thanks for your interest in contributing to this repo!

## Author

[Luiz Felipe Zarco](https://github.com/felipezarco) (felipezarco@hotmail.com)

## License

This code is licensed under the [MIT License](https://github.com/felipezarco/responser/blob/master/LICENSE.md). See the [LICENSE.md](https://github.com/felipezarco/responser/blob/master/LICENSE.md) file for more info.
