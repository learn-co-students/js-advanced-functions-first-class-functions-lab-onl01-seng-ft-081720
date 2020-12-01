// Code your solution in this file!


const returnFirstTwoDrivers = function (array){
    return array.slice(0,2)
}
const returnLastTwoDrivers = function (array){
    return array.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers = function(array, selector){
    return selector(array)
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

function createFareMultiplier(int){
    debugger
    if (int == 5){
        return fareQuintupler
    } else if (int == 4){
        return fareDoubler
    } else if (int == 3){
        return fareTripler
    } else if (int == 2){
        return fareQuadrupler
    } else {
        return int
    }
}

function actionApplyer(int, equations){
    console.log(int, equations)
    
    if (equations.length == 0){
        return int

    } else {
        equations.forEach(function(eq){
            // console.log(int)
            int = eq(int)
            console.log(eq(int))
        })
        return int
    }
}

const fareDoubler = function(fare){
    return fare * 2
}
const fareTripler = function(fare){
    return fare * 3
}
const fareQuadrupler = function(fare){
    return fare * 4
}
const fareQuintupler = function(fare){
    return fare * 5
}