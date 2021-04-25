module.exports = authorize;

function authorize(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return [
    // authorize based on user role
    (req, res, next) => {
      if (roles.length && !roles.includes(req.user.roles)) {
        // user's role is not authorized
        return response.error("Unauthorized", 403, res);
      }
      // authentication and authorization successful
      next();
    },
  ];
}
