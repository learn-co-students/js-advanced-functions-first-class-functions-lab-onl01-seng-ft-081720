// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {
    let firstTwo = drivers.slice(0, 2)
    return firstTwo
}
const returnLastTwoDrivers = drivers => {
    let lastTwo = drivers.slice(-2)
    return lastTwo
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int => {
    return function(multiplyer) {
        return int * multiplyer
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}