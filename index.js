// Code your solution in this file!
const returnFirstTwoDrivers = 
  function(arr) { 
    return arr.slice(0, 2)

}

const returnLastTwoDrivers = 
    function (arr) {
        return arr.slice(Math.max(arr.length - 2, 1))

    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    }
} 

function fareDoubler(fare){
    let stored = createFareMultiplier(2);
    return stored(fare); 
}

function fareTripler(fare){
    let stored = createFareMultiplier(3);
    return stored(fare); 
}
function selectDifferentDrivers(driverArr, selectingDriverFn) {
    return selectingDriverFn(driverArr);
} 

