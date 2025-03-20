//RUTAS DE USARIOS /AUTH
// HOST + /API/AUTH

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = Router();

router.get("/", getEventos);

router.post("/", crearEventos);

router.put("/:id", actualizarEvento);

router.delete("/:id", eliminarEvento);

module.exports = router;
