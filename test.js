var expect = require('chai').expect
  , client = require('client')
  , colorfill = require('./')

describe('colorfill', function() {
  it('should return original string', function() {
    expect('foo'.green.strip).to.eql('foo')
  })
})