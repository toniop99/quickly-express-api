export const notFound = (req, res, next) => {
  res.status(404)
  const error = new Error(`Url Not Found - ${req.originalUrl}`)
  next(error)
}
