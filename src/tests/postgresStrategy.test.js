const assert = require('assert')
const Postgres = require('./../db/strategies/postgres')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new Postgres)
const MOCK_HERO_REGISTER = {
    name: 'Black Hawk',
    power: "Magic Arrow"
}


describe('Postgres Strategy', function () {
    this.timeout(Infinity)

    this.beforeAll(async function () {
        await context.connect()
    })

    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })

    it.only('Register', async function () {
        const result = await context.create(MOCK_HERO_REGISTER)
        delete result.id
        assert.deepStrictEqual(result, MOCK_HERO_REGISTER)
    })
})









