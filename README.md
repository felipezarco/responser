## responser

As an api programmer you should not need to always be concerned about the status code and the data type of your responses.
Responser will give you all http status codes and send them in a JSON.

#### Install:

Use your favorite package manager to install.

```javascript
yarn add responser
```

Then import it.

```javascript
import responser from 'responser'
```

Or, for commonjs:

```javascript
const responser = require('responser')
```

#### Add it to your express middlewares:

```javascript
app.use(responser)
```

#### Usage:

Since, responser overwrites Express' interface with the send_* methods, now you can call responser methods using the response parameter in one of your middlewares or controllers:

```javascript

const products = ['notebook', 'television']

return response.send_ok('Products were successfully found!', {
  products
}
```

The following code generates the response:

```json
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8

{
  "code": 200,
  "status": "OK",
  "message": "Products were successfully found!",
  "success": true,
  "data": {
    "products": [
      "notebook", 
      "television"
    ]
  }
}
```


