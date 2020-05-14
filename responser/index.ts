import { Request, Response, NextFunction } from 'express'

const responser = (request: Request, response: Response, next: NextFunction) => {

  response.ok = function() {
    this.status(200).json({ message: 'Hello Responser' })
  }

  next()
} 

export default responser
