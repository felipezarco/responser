## responser

As an api programmer you should not need to always be concerned about the status code and the data type of your responses.
Responser will give you all http status codes and send them in a JSON.

#### Install:

Use your favorite package manager to install.

```
yarn add responser
```

Then import it.

```
import responser from 'responser'
```

Or, for commonjs:

```
const responser = require('responser')
```

#### Add it to your express middlewares:

```
app.use(responser)
```

#### Usage:

Since, responser overwrites Express' interface with the send_* methods, now you can call responser methods using the response parameter in one of your middlewares or controllers:

```
return response.send_ok('Products were successfully found!', {
  myListOfProducts
}
```

The following code generates the response:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "code": 200,
  "status": "OK",
  "message": "Products were successfully found!",
  "success": true,
  "data": {
     "myListOfProducts": [
        ...
     ]
  }
}
```


