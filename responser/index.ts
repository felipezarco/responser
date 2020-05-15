import { Request, Response, NextFunction } from 'express'
import HttpStatus from 'http-status-codes'

const camelCase = (str: string) => str.toLowerCase().replace(/(\_\w)/g, c => c[1].toUpperCase())

const responser = (request: Request, response: Response, next: NextFunction) => {
  for(const [status, code] of Object.entries(HttpStatus)) {
    if(status == 'getStatusText' || status == 'getStatusCode') continue
    response[camelCase(status)] = function(message: string, content?: object) {
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
