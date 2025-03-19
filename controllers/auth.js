const { response } = require("express");
const { validationResult } = require("express-validator");

//FUNCIONES EN LAS RUTAS
const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  //MANEJO DE ERRORES
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     ok: false,
  //     errors: errors.mapped(),
  //   });
  // }

  res.status(201).json({
    ok: true,
    data: {
      name,
      email,
      password,
    },
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;

  // //MANEJO DE ERRORES
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({
  //     ok: false,
  //     errors: errors.mapped(),
  //   });
  // }

  res.status(201).json({
    ok: true,
    data: {
      email,
      password,
    },
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
