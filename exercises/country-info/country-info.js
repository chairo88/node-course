const fs = require("fs"),
  file = "./countries.json";


  fs.readFile("DATA", (err, contents) => {
    console.log(contents);
});

module.exports = {

    getCountryInfo(code, cb) {
    
    },
  
    getCountryInfoByName(name, cb) {
      
    }
};