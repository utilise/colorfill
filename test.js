var expect = require('chai').expect
  , colorfill = require('./')

describe('colorfill', function() {
  it('should return original string', function() {
    expect('foo'.green.strip).to.eql('foo')
  })
})