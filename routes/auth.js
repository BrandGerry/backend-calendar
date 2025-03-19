//RUTAS DE USARIOS /AUTH
// HOST + /API/AUTH

const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

const router = Router();

router.post(
  "/new",
  [
    //MIDLEWARES
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
  ],
  crearUsuario
);
router.post("/", loginUsuario);
router.get("/renew", revalidarToken);

module.exports = router;
