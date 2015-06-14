var client = require('client')
  , colors = require('colors')

module.exports = colorfill()

function colorfill(){
  /* istanbul ignore next */
  client && ['red', 'green', 'bold', 'grey', 'strip'].forEach(function(color) {
    ('')[color] !== '' && Object.defineProperty(String.prototype, color, {
      get: function () {
        return String(this)
      }
    })
  })
}
