const generateRandomMessage = require('generateSensorMessage')

const d = require('dbLib')



d.create_new_db(() => {
    d.fill_db_with_dummy_data( () => {
        d.dump_db_content()
    },generateRandomMessage)   
})