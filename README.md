# Responser

While creating an API, a programmer should not always need to be concerned about the status code and the data type of your responses. Responser gives you a simple way of returning an REST API base response for each one of the HTTP status codes availables.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/responser.svg)](https://badge.fury.io/js/responser) [![Build Status](https://travis-ci.org/felipezarco/responser.svg?branch=master)](https://travis-ci.org/felipezarco/responser) 

[![Coverage Status](https://coveralls.io/repos/github/felipezarco/responser/badge.svg?branch=master)](https://coveralls.io/github/felipezarco/responser?branch=master)


[![npm](https://nodei.co/npm/responser.png)](https://www.npmjs.com/package/responser)

#### Install:

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

Then you need to add responser as an express middleware:

```javascript
app.use(responser)
```

And you're good to go!

#### Usage:

Since responser overwrites Express' interface, you can find the responser send_* methods directly in the express response. Methods accept two parameters: 

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

An example of unsucessful response would be:

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
      'The request contains one or more errors!', {
        invalid
      }
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
    errors: {
      invalid: [
        { name: 'planetName', message: 'The planet name was not given!' }
      ]
    }
  }
```


Where:

- `code` is a number HTTP Status Code;

- `status` is a string with the name of the HTTP Status;

- `success` is a boolean which is true for 1XX and 2XX HTTP Status Codes;

- `data` **or** `errors` is an object with the second argument. It is `undefined` if none is given.

**Note**: `data` is the key name when `success` is `true` while `errors` is the key when `success` is `false`.

With typescript, you can easily access all methods:

![vscode suggestions](https://raw.githubusercontent.com/felipezarco/files/master/images/screenshots/responser.png "Responser typescript methods suggestion")

The following methods are currently available (method, code and status):
```javascript
send_accepted                      202 ACCEPTED 
send_badGateway                    502 BAD_GATEWAY 
send_badRequest                    400 BAD_REQUEST 
send_conflict                      409 CONFLICT 
send_continue                      100 CONTINUE 
send_created                       201 CREATED 
send_expectationFailed             417 EXPECTATION_FAILED 
send_failedDependency              424 FAILED_DEPENDENCY 
send_forbidden                     403 FORBIDDEN 
send_gatewayTimeout                504 GATEWAY_TIMEOUT 
send_gone                          410 GONE 
send_httpVersionNotSupported       505 HTTP_VERSION_NOT_SUPPORTED 
send_imATeapot                     418 IM_A_TEAPOT 
send_insufficientSpaceOnResource   419 INSUFFICIENT_SPACE_ON_RESOURCE 
send_insufficientStorage           507 INSUFFICIENT_STORAGE 
send_internalServerError           500 INTERNAL_SERVER_ERROR 
send_lengthRequired                411 LENGTH_REQUIRED 
send_locked                        423 LOCKED 
send_methodFailure                 420 METHOD_FAILURE 
send_methodNotAllowed              405 METHOD_NOT_ALLOWED 
send_movedPermanently              301 MOVED_PERMANENTLY 
send_movedTemporarily              302 MOVED_TEMPORARILY 
send_multiStatus                   207 MULTI_STATUS 
send_multipleChoices               300 MULTIPLE_CHOICES 
send_networkAuthenticationRequired 511 NETWORK_AUTHENTICATION_REQUIRED 
send_noContent                     204 NO_CONTENT 
send_nonAuthoritativeInformation   203 NON_AUTHORITATIVE_INFORMATION 
send_notAcceptable                 406 NOT_ACCEPTABLE 
send_notFound                      404 NOT_FOUND 
send_notImplemented                501 NOT_IMPLEMENTED 
send_notModified                   304 NOT_MODIFIED 
send_ok                            200 OK 
send_partialContent                206 PARTIAL_CONTENT 
send_paymentRequired               402 PAYMENT_REQUIRED 
send_permanentRedirect             308 PERMANENT_REDIRECT 
send_preconditionFailed            412 PRECONDITION_FAILED 
send_preconditionRequired          428 PRECONDITION_REQUIRED 
send_processing                    102 PROCESSING 
send_proxyAuthenticationRequired   407 PROXY_AUTHENTICATION_REQUIRED 
send_requestHeaderFieldsTooLarge   431 REQUEST_HEADER_FIELDS_TOO_LARGE 
send_requestTimeout                408 REQUEST_TIMEOUT 
send_requestTooLong                413 REQUEST_TOO_LONG 
send_requestUriTooLong             414 REQUEST_URI_TOO_LONG 
send_requestedRangeNotSatisfiable  416 REQUESTED_RANGE_NOT_SATISFIABLE 
send_resetContent                  205 RESET_CONTENT 
send_seeOther                      303 SEE_OTHER 
send_serviceUnavailable            503 SERVICE_UNAVAILABLE 
send_switchingProtocols            101 SWITCHING_PROTOCOLS 
send_temporaryRedirect             307 TEMPORARY_REDIRECT 
send_tooManyRequests               429 TOO_MANY_REQUESTS 
send_unauthorized                  401 UNAUTHORIZED 
send_unprocessableEntity           422 UNPROCESSABLE_ENTITY 
send_unsupportedMediaType          415 UNSUPPORTED_MEDIA_TYPE 
send_useProxy                      305 USE_PROXY 
```

License MIT @ Felipe Zarco


