var httpCodes = {
  ok: 200,
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  unprocessableEntity: 422,
  serverError: 500
}

module.exports = function (statusMessage, responseMessage) {
  if (!httpCodes[statusMessage]) {
    throw new Error
  }

  // responseMessage is optional
  var responseObject = new Error(responseMessage || statusMessage)
  responseObject.statusCode = httpCodes[statusMessage]
  return responseObject
}