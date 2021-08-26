let environment = process.env.VUE_APP_BASEURL;
// console.log(environment);
let config = require('./env.' + environment)
module.exports = config