const expect = require('chai').expect

const ping = require('./ping')

describe('Ping', () => {
    it('should return Pong!', () => {
        const context = { log: () => {}}

        ping(context)

        expect(context.res.body).to.equal('Pong!')
    })
})