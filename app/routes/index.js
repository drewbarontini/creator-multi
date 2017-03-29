// *************************************
//
//   Index - Routes
//   -> '/'
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const express = require('express');
const router = express.Router();

// -------------------------------------
//   Base
// -------------------------------------

// ----- GET '/' ----- //

router.get('/', (req, res, next) => {
  res.render('index');
});

// -------------------------------------
//   Exports
// -------------------------------------

module.exports = router;
