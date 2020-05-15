import { Request, Response, NextFunction } from 'express'
import HttpStatus from 'http-status-codes'

declare global {
  namespace Express {
    interface Response {
      accepted: () => void
      badGateway: () => void
      badRequest: () => void
      conflict: () => void
      continue: () => void
      created: () => void
      expectationFailed: () => void
      failedDependency: () => void
      forbidden: () => void
      gatewayTimeout: () => void
      gone: () => void
      httpVersionNotSupported: () => void
      imATeapot: () => void
      insufficientSpaceOnResource: () => void
      insufficientStorage: () => void
      internalServerError: () => void
      lengthRequired: () => void
      locked: () => void
      methodFailure: () => void
      methodNotAllowed: () => void
      movedPermanently: () => void
      movedTemporarily: () => void
      multiStatus: () => void
      multipleChoices: () => void
      networkAuthenticationRequired: () => void
      noContent: () => void
      nonAuthoritativeInformation: () => void
      notAcceptable: () => void
      notFound: () => void
      notImplemented: () => void
      notModified: () => void
      ok: () => void
      partialContent: () => void
      paymentRequired: () => void
      permanentRedirect: () => void
      preconditionFailed: () => void
      preconditionRequired: () => void
      processing: () => void
      proxyAuthenticationRequired: () => void
      requestHeaderFieldsTooLarge: () => void
      requestTimeout: () => void
      requestTooLong: () => void
      requestUriTooLong: () => void
      requestedRangeNotSatisfiable: () => void
      resetContent: () => void
      seeOther: () => void
      serviceUnavailable: () => void
      switchingProtocols: () => void
      temporaryRedirect: () => void
      tooManyRequests: () => void
      unauthorized: () => void
      unprocessableEntity: () => void
      unsupportedMediaType: () => void
      useProxy: () => void
    }
  }
}

const camelCase = (str: string) => str.toLowerCase().replace(/(\_\w)/g, c => c[1].toUpperCase())

const responser = (request: Request, response: Response, next: NextFunction) => {
  for(const [status, code] of Object.entries(HttpStatus)) {
    if(status == 'getStatusText' || status == 'getStatusCode') continue
    (response as any)[camelCase(status)] = function(message: string, content?: object) {
      this.status(HttpStatus.OK).json({ 
        status, 
        code,
        success: String(code).charAt(0) === '2',
        message, 
        data: { ...content }
      })
    }
  }  
  next()
} 

export default responser
