const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      { expiresIn: "2h" },
      (err, token) => {
        if (err) {
          console.log("ERR", err);
          reject("NO SE PUDO GENERAR EL TOKEN");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
