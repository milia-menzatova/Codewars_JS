/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because  
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
*/

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i] ** 2
    }
    return sum

}

function squareSum(numbers) {
    let sum = 0
    numbers.forEach( number => {
        sum += (number * number)
    })
    return sum
}