const rejectUnauthenticated = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // They may not be authorized to do all things
    next();
  } else {
    // failure best handled on the server. (TODO: do the redirect here)
    res.sendStatus(403);
  }
};

module.exports = { rejectUnauthenticated };
