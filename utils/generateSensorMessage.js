const _ = require('lodash/fp')

const randomDate = (start,end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const generateRandomMessage = () => {
    const randDateTime = randomDate(new Date(2018, 0, 1), new Date())
    return {
        periodStart: randDateTime.toISOString(),
        periodDurationSeconds: _.random(0,3600,false),
        unit: 'Celsius',
        avg: _.random(-3,+30,true),
        stdDev: _.random(1,5,true),
        nObs: _.random(1,100,false)
    }
}

module.exports = generateRandomMessage