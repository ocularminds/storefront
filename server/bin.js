const storefront = require('./main') /* the current working directory so that means main.js because of package.json */
let theFile = process.argv[2] /* what the user enters as first argument */

console.log(storefront(theFile))