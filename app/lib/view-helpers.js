// *************************************
//
//   View Helpers - Library
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

const config = require('./constants');

// -------------------------------------
//   Get Site Title
// -------------------------------------

exports.getSiteTitle = () => {
  return config.TITLE;
};

// -------------------------------------
//   Pre
// -------------------------------------

exports.pre = (object) => {
  return JSON.stringify(object, null, 2);
};
