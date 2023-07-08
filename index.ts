import { Request, Response, NextFunction } from 'express'
import HttpStatus from 'http-status-codes'

declare global {
  namespace Express {
    interface Response {
      send_accepted: (message: string, content?: any) => void
      send_badGateway: (message: string, content?: any) => void
      send_badRequest: (message: string, content?: any) => void
      send_conflict: (message: string, content?: any) => void
      send_continue: (message: string, content?: any) => void
      send_created: (message: string, content?: any) => void
      send_expectationFailed: (message: string, content?: any) => void
      send_failedDependency: (message: string, content?: any) => void
      send_forbidden: (message: string, content?: any) => void
      send_gatewayTimeout: (message: string, content?: any) => void
      send_gone: (message: string, content?: any) => void
      send_httpVersionNotSupported: (message: string, content?: any) => void
      send_imATeapot: (message: string, content?: any) => void
      send_insufficientSpaceOnResource: (message: string, content?: any) => void
      send_insufficientStorage: (message: string, content?: any) => void
      send_internalServerError: (message: string, content?: any) => void
      send_lengthRequired: (message: string, content?: any) => void
      send_locked: (message: string, content?: any) => void
      send_methodFailure: (message: string, content?: any) => void
      send_methodNotAllowed: (message: string, content?: any) => void
      send_movedPermanently: (message: string, content?: any) => void
      send_movedTemporarily: (message: string, content?: any) => void
      send_multiStatus: (message: string, content?: any) => void
      send_multipleChoices: (message: string, content?: any) => void
      send_networkAuthenticationRequired: (message: string, content?: any) => void
      send_noContent: (message: string, content?: any) => void
      send_nonAuthoritativeInformation: (message: string, content?: any) => void
      send_notAcceptable: (message: string, content?: any) => void
      send_notFound: (message: string, content?: any) => void
      send_notImplemented: (message: string, content?: any) => void
      send_notModified: (message: string, content?: any) => void
      send_ok: (message: string, content?: any) => void
      send_partialContent: (message: string, content?: any) => void
      send_paymentRequired: (message: string, content?: any) => void
      send_permanentRedirect: (message: string, content?: any) => void
      send_preconditionFailed: (message: string, content?: any) => void
      send_preconditionRequired: (message: string, content?: any) => void
      send_processing: (message: string, content?: any) => void
      send_proxyAuthenticationRequired: (message: string, content?: any) => void
      send_requestHeaderFieldsTooLarge: (message: string, content?: any) => void
      send_requestTimeout: (message: string, content?: any) => void
      send_requestTooLong: (message: string, content?: any) => void
      send_requestUriTooLong: (message: string, content?: any) => void
      send_requestedRangeNotSatisfiable: (message: string, content?: any) => void
      send_resetContent: (message: string, content?: any) => void
      send_seeOther: (message: string, content?: any) => void
      send_serviceUnavailable: (message: string, content?: any) => void
      send_switchingProtocols: (message: string, content?: any) => void
      send_temporaryRedirect: (message: string, content?: any) => void
      send_tooManyRequests: (message: string, content?: any) => void
      send_unauthorized: (message: string, content?: any) => void
      send_unprocessableEntity: (message: string, content?: any) => void
      send_unsupportedMediaType: (message: string, content?: any) => void
      send_useProxy: (message: string, content?: any) => void
    }
  }
}

const isObjectEmpty = (obj: object) => Object.keys(obj).length === 0

const camelCase = (str: string) => str.toLowerCase().replace(/(\_\w)/g, c => c[1].toUpperCase())

const responser = (request: Request, response: Response, next: NextFunction) => {
  for(const [status, code] of Object.entries(HttpStatus)) {
    if(status == 'getStatusText' || status == 'getStatusCode') continue
    const success = ['1','2'].includes(String(code).charAt(0));
    (response as any)['send_'+camelCase(status)] = function(message: string, content?: any) {
      const hasContent = content && !isObjectEmpty(content) 
      this.status(code).json({
        status,
        code,
        success,
        message,
        data: hasContent && success ? content : undefined,
        errors: hasContent && !success ? content : undefined,
      })
    }
  }
  next()
}

export default responser
