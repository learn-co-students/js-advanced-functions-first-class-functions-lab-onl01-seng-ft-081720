const returnFirstTwoDrivers = function(array){ return array.slice(0,2)}

const returnLastTwoDrivers = function(array){ return array.slice(2,4)}

const selectingDrivers = [
    returnFirstTwoDrivers,returnLastTwoDrivers
]

function createFareMultiplier(integer){
    return function(event){
       return  event * integer

    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array,fun){
    return fun(array)
}