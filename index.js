var client = require('client')

module.exports = colorfill()

function colorfill(){
  client && ['red', 'green', 'bold', 'grey'].forEach(function(color) {
    Object.defineProperty(String.prototype, color, {
      get: function () {
        return String(this)
      }
    })
  })
}
