const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')


class Postgres extends ICrud {
    constructor() {
        super()
        this._driver = null
        this._heroes = null
        this._connect()
    }

    async isConnected() {
        try {

            await this._driver.authenticate()
            return true

        } catch (error) {

            console.log('fail!', error)
            return false

        }
    }

    async defineModel() {
        this._heroes = driver.define('heroes', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                required: true
            },
            power: {
                type: Sequelize.STRING,
                required: true
            }
        }, {
            tableName: 'TB_HEROES',
            freezeTableName: false,
            timestamps: false
        })

        await Heroes.sync()
    }

    create(item) {
        console.log("O item foi salvo em Postgres")
    }

    _connect() {

        this._driver = new Sequelize(
            'heros',
            'user',
            'senha',
            {
                host: 'localhost',
                dialect: 'postgres',
                quoteIdentifiers: false,
                operatorsAliases: false
            }
        )

    }
}

module.exports = Postgres