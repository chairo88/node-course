const fs = require("fs"),
  file = `${__dirname}/countries.json`;


function generarArrayPaises(buscar, cb) {
  fs.readFile(file, (err, contents) => {
    if (err) {
      cb(err);
    } else {
      const arrayDePaises = JSON.parse(contents),
        pais = arrayDePaises.find(buscar);
      cb(null, pais);
    }
  });
}

module.exports = {
  getCountryInfo(code, cb) {
    // eslint-disable-next-line func-style
    const encuentraPais = (c) => {
      return c.code === code;
    };

    generarArrayPaises(encuentraPais, cb);
  },
  
  getCountryInfoByName(name, cb) {
  
    function encuentraPais(c) {
      return c.name === name;
    } 
    generarArrayPaises(encuentraPais, cb);
  }
};
