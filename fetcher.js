argv = process.argv.slice(2)
const request = require('request');
const fs = require('fs');

request(argv[0], (error, response, body) => {
  fs.writeFile(argv[1],(error, response, body), err => {
    if (err) {
      console.log('error')
      return
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${argv[1]}` )
})

