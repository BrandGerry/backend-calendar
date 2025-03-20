//RUTAS DE USARIOS /AUTH
// HOST + /API/AUTH

const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
  "/new",
  [
    //MIDLEWARES
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de tener mas de 6 caracteres").isLength(
      { min: 6 }
    ),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    //MIDLEWARES
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de tener mas de 6 caracteres").isLength(
      { min: 6 }
    ),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
