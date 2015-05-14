var expect = require('chai').expect
  , mock = require('mockery')
  , mock = (mock.enable(), mock.registerMock('client', true))
  , colorfill = require('./')

describe('colorfill', function() {
  it('should return original string', function() {
    expect('foo'.green).to.eql('foo')
  })
})