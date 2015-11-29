function sendResponse(res) {
  return res.json(res.locals.data || {})
}

function catchErrors(err, req, res, next) {
  res.status(err.statusCode)
  res.locals.data = {message: err.message}
  return sendResponse(res)
}

function sendSuccess(res) {
  res.status(200)
  return sendResponse(res)
}



module.exports = {
  catchErrors: catchErrors,
  sendSuccess: sendSuccess
}