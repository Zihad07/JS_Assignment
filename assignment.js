// Kilometer to Meter Convater function
function KilometerToMeter(kilometer) {

    if (typeof kilometer === 'number' && kilometer >= 0) {
        return kilometer * 100;

    }

    return 'Unexpected parameter value';
}

// console.log(KilometerToMeter([89]));
// console.log(KilometerToMeter('89'));
// console.log(KilometerToMeter(89));
// console.log(KilometerToMeter(-89));
// console.log(KilometerToMeter(-89.00));
// console.log(KilometerToMeter(89.2566));



//--------------------------------------------------------------------------------
/**
 * Price:
 watch = 50
 phone = 100
 laptop = 500
 */
// the budgetCalculator function calculate total price above things.
function budgetCalculator(numberOfWatch = 0, numberOfPhone = 0, numberOfLaptop = 0) {

    const priceOfWatch = 50;
    const priceOfphone = 100;
    const priceOflaptop = 500;

    if (variableType(numberOfWatch) != 'number' || variableType(numberOfPhone) != 'number' || variableType(numberOfLaptop) != 'number' || isNegative(numberOfWatch) || isNegative(numberOfPhone) || isNegative(numberOfLaptop)) {
        return 'Unexpected parameter value';
    }



    let totalPrice = (priceOfWatch * numberOfWatch) + (priceOfphone * numberOfPhone) + (priceOflaptop * numberOfLaptop);

    return totalPrice;

}

// return variable type
function variableType($params) {
    return typeof $params;
}

function isNegative($value) {
    return $value < 0 ? true : false;
}

//----------------------------------------------------------------------

// fot testing
// console.log(budgetCalculator(1, 2, 3));
// console.log(budgetCalculator(1.0, 2.0, 3.0));
// console.log(budgetCalculator(1.0, 2.0, '3'));
// console.log(budgetCalculator(['10'], 2.0, '3'));
// console.log(budgetCalculator('test', 2.0, '3'));
// console.log(budgetCalculator(1, 2.0, -4));
// console.log(budgetCalculator(-1, '2.0', -4));
// console.log(budgetCalculator(9));


// ----------------------------------------------------

// 100 taka => 1 to 10 each day
// 80 taka => 11 to 20 each day
// 50 taka => 21 to Infinity each day

// hotelCost function return totalCost for days you spend.
function hotelCost(day) {

    let firstTenDayCost = 100;
    let secondTenDayCost = 80;
    let infiniteDayCost = 50;
    let totalCost = 0;

    // For Error Handling Condition
    if (variableType(day) != 'number' || isNegative(day)) {
        return 'Unexpected day parameter value.';
    }

    let fisrtTenDay = 0;
    let secondTenDay = 0;
    let infiniteDay = 0;

    if (day > 20) {
        infiniteDay = day - 20;
    }
    if ((day - infiniteDay) > 10) {
        secondTenDay = day - infiniteDay - 10;
    }

    if ((day - secondTenDay - infiniteDay) <= 10) {
        fisrtTenDay = day - secondTenDay - infiniteDay;
    }

    console.log(infiniteDay, secondTenDay, fisrtTenDay)

    totalCost = (firstTenDayCost * fisrtTenDay) + (secondTenDayCost * secondTenDay) + (infiniteDayCost * infiniteDay);

    return totalCost;

}
//---------------------------------------------
// For testing

console.log(hotelCost(10))
console.log(hotelCost(7))
console.log(hotelCost(18))
console.log(hotelCost(-18))
console.log(hotelCost(25))
console.log(hotelCost(30))
console.log(hotelCost('30'))
console.log(hotelCost([]))