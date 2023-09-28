module.exports = function validRole(req, res, next) {
  const rolesArray = ["Admin", "user"];
  const role = req.role;
  if (!rolesArray.includes(role)) {
    return res.status(401).send({ error: "Your role is not authorized" });
  }
  next();
};
