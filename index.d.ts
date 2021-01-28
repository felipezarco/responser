import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Response {
            send_accepted: (message: string, content?: object) => void;
            send_badGateway: (message: string, content?: object) => void;
            send_badRequest: (message: string, content?: object) => void;
            send_conflict: (message: string, content?: object) => void;
            send_continue: (message: string, content?: object) => void;
            send_created: (message: string, content?: object) => void;
            send_expectationFailed: (message: string, content?: object) => void;
            send_failedDependency: (message: string, content?: object) => void;
            send_forbidden: (message: string, content?: object) => void;
            send_gatewayTimeout: (message: string, content?: object) => void;
            send_gone: (message: string, content?: object) => void;
            send_httpVersionNotSupported: (message: string, content?: object) => void;
            send_imATeapot: (message: string, content?: object) => void;
            send_insufficientSpaceOnResource: (message: string, content?: object) => void;
            send_insufficientStorage: (message: string, content?: object) => void;
            send_internalServerError: (message: string, content?: object) => void;
            send_lengthRequired: (message: string, content?: object) => void;
            send_locked: (message: string, content?: object) => void;
            send_methodFailure: (message: string, content?: object) => void;
            send_methodNotAllowed: (message: string, content?: object) => void;
            send_movedPermanently: (message: string, content?: object) => void;
            send_movedTemporarily: (message: string, content?: object) => void;
            send_multiStatus: (message: string, content?: object) => void;
            send_multipleChoices: (message: string, content?: object) => void;
            send_networkAuthenticationRequired: (message: string, content?: object) => void;
            send_noContent: (message: string, content?: object) => void;
            send_nonAuthoritativeInformation: (message: string, content?: object) => void;
            send_notAcceptable: (message: string, content?: object) => void;
            send_notFound: (message: string, content?: object) => void;
            send_notImplemented: (message: string, content?: object) => void;
            send_notModified: (message: string, content?: object) => void;
            send_ok: (message: string, content?: object) => void;
            send_partialContent: (message: string, content?: object) => void;
            send_paymentRequired: (message: string, content?: object) => void;
            send_permanentRedirect: (message: string, content?: object) => void;
            send_preconditionFailed: (message: string, content?: object) => void;
            send_preconditionRequired: (message: string, content?: object) => void;
            send_processing: (message: string, content?: object) => void;
            send_proxyAuthenticationRequired: (message: string, content?: object) => void;
            send_requestHeaderFieldsTooLarge: (message: string, content?: object) => void;
            send_requestTimeout: (message: string, content?: object) => void;
            send_requestTooLong: (message: string, content?: object) => void;
            send_requestUriTooLong: (message: string, content?: object) => void;
            send_requestedRangeNotSatisfiable: (message: string, content?: object) => void;
            send_resetContent: (message: string, content?: object) => void;
            send_seeOther: (message: string, content?: object) => void;
            send_serviceUnavailable: (message: string, content?: object) => void;
            send_switchingProtocols: (message: string, content?: object) => void;
            send_temporaryRedirect: (message: string, content?: object) => void;
            send_tooManyRequests: (message: string, content?: object) => void;
            send_unauthorized: (message: string, content?: object) => void;
            send_unprocessableEntity: (message: string, content?: object) => void;
            send_unsupportedMediaType: (message: string, content?: object) => void;
            send_useProxy: (message: string, content?: object) => void;
        }
    }
}
declare const responser: (request: Request, response: Response, next: NextFunction) => void;
export default responser;
