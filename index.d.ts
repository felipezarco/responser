import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Response {
            

            throw_multipleChoices: (message?: string, content?: string) => void; 
            	// Multiple Choices
            throw_movedPermanently: (message?: string, content?: string) => void; 
            	// Moved Permanently
            throw_movedTemporarily: (message?: string, content?: string) => void; 
            	// Moved Temporarily
            throw_seeOther: (message?: string, content?: string) => void; 
            	// See Other
            throw_notModified: (message?: string, content?: string) => void; 
            	// Not Modified
            throw_useProxy: (message?: string, content?: string) => void; 
            	// Use Proxy
            throw_temporaryRedirect: (message?: string, content?: string) => void; 
            	// Temporary Redirect
            throw_permanentRedirect: (message?: string, content?: string) => void; 
            	// Permanent Redirect
            throw_badRequest: (message?: string, content?: string) => void; 
            	// Bad Request
            throw_unauthorized: (message?: string, content?: string) => void; 
            	// Unauthorized
            throw_paymentRequired: (message?: string, content?: string) => void; 
            	// Payment Required
            throw_forbidden: (message?: string, content?: string) => void; 
            	// Forbidden
            throw_notFound: (message?: string, content?: string) => void; 
            	// Not Found
            throw_methodNotAllowed: (message?: string, content?: string) => void; 
            	// Method Not Allowed
            throw_notAcceptable: (message?: string, content?: string) => void; 
            	// Not Acceptable
            throw_proxyAuthenticationRequired: (message?: string, content?: string) => void; 
            	// Proxy Authentication Required
            throw_requestTimeout: (message?: string, content?: string) => void; 
            	// Request Timeout
            throw_conflict: (message?: string, content?: string) => void; 
            	// Conflict
            throw_gone: (message?: string, content?: string) => void; 
            	// Gone
            throw_lengthRequired: (message?: string, content?: string) => void; 
            	// Length Required
            throw_preconditionFailed: (message?: string, content?: string) => void; 
            	// Precondition Failed
            throw_requestTooLong: (message?: string, content?: string) => void; 
            	// Request Entity Too Large
            throw_requestUriTooLong: (message?: string, content?: string) => void; 
            	// Request-URI Too Long
            throw_unsupportedMediaType: (message?: string, content?: string) => void; 
            	// Unsupported Media Type
            throw_requestedRangeNotSatisfiable: (message?: string, content?: string) => void; 
            	// Requested Range Not Satisfiable
            throw_expectationFailed: (message?: string, content?: string) => void; 
            	// Expectation Failed
            throw_imATeapot: (message?: string, content?: string) => void; 
            	// I'm a teapot
            throw_insufficientSpaceOnResource: (message?: string, content?: string) => void; 
            	// Insufficient Space on Resource
            throw_methodFailure: (message?: string, content?: string) => void; 
            	// Method Failure
            throw_misdirectedRequest: (message?: string, content?: string) => void; 
            	// Misdirected Request
            throw_unprocessableEntity: (message?: string, content?: string) => void; 
            	// Unprocessable Entity
            throw_locked: (message?: string, content?: string) => void; 
            	// Locked
            throw_failedDependency: (message?: string, content?: string) => void; 
            	// Failed Dependency
            throw_preconditionRequired: (message?: string, content?: string) => void; 
            	// Precondition Required
            throw_tooManyRequests: (message?: string, content?: string) => void; 
            	// Too Many Requests
            throw_requestHeaderFieldsTooLarge: (message?: string, content?: string) => void; 
            	// Request Header Fields Too Large
            throw_unavailableForLegalReasons: (message?: string, content?: string) => void; 
            	// Unavailable For Legal Reasons
            throw_internalServerError: (message?: string, content?: string) => void; 
            	// Internal Server Error
            throw_notImplemented: (message?: string, content?: string) => void; 
            	// Not Implemented
            throw_badGateway: (message?: string, content?: string) => void; 
            	// Bad Gateway
            throw_serviceUnavailable: (message?: string, content?: string) => void; 
            	// Service Unavailable
            throw_gatewayTimeout: (message?: string, content?: string) => void; 
            	// Gateway Timeout
            throw_httpVersionNotSupported: (message?: string, content?: string) => void; 
            	// HTTP Version Not Supported
            throw_insufficientStorage: (message?: string, content?: string) => void; 
            	// Insufficient Storage
            throw_networkAuthenticationRequired: (message?: string, content?: string) => void; 
            	// Network Authentication Required

/*             send_accepted: (message: string, content?: object) => void;
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
            send_useProxy: (message: string, content?: object) => void; */
        }
    }
}
declare const responser: (request: Request, response: Response, next: NextFunction) => void;
export default responser;
