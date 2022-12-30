const trimmer = function (req, res, next) {
  for (const property in req.body) {
    if (typeof req.body[property] === 'string')
      req.body[property] = req.body[property].trim();
  }
  next();
};

export default trimmer;
