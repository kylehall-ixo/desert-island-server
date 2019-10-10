const expect = require('chai').expect

const ping = require('./ping')

describe('Ping', () => {
  it('should return Pong!', () => {
    const context = { log: () => {} }

    ping(context)

    expect(context.res.body).to.deep.equal({
      msg: 'Pong! Plus some more to test the deployment works!'
    })
  })

  it('should return json content type', () => {
    const context = { log: () => {} }

    ping(context)

    expect(context.res.headers).to.deep.equal({
      contentType: 'application/json'
    })
  })
})
