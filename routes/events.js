//RUTAS DE USARIOS /AUTH
// HOST + /API/EVENTS

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const {
  actualizarEvento,
  eliminarEvento,
  getEvento,
  crearEvento,
} = require("../controllers/events");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();
//ESTE MIDDELWARE APLICA PARA TODOS LOS QUE ESTAB DEBAJO
router.use(validarJWT);

router.get("/", getEvento);

router.post(
  "/",
  [
    //MIDLEWARES
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatorio").custom(isDate),
    check("end", "Fecha de finalizacion es obligatorio").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
