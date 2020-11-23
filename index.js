const returnFirstTwoDrivers = drivers => {
    const frstTwo = drivers.slice(0, 2)
    return frstTwo
}

const returnLastTwoDrivers = drivers => {
    const lstTwo = drivers.slice(-2)
    return lstTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int =>  {
    return function(multiplyer){
        return int * multiplyer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, fnctn) => {
    return fnctn(drivers)
}