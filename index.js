// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare* int
    }
}

function fareDoubler(x){
    return x * 2
}

function fareTripler(x){
    return x * 3
}

function selectDifferentDrivers(drivers, func){
    return func(drivers)
}
