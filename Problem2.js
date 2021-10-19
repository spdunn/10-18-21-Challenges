/**
 *  Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
 * 
 *  Examples:
 *  doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
 * 
 *  doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
 * 
 *  doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
 * 
 *  doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
 * 
 *  Notes:
 *  Triangle fits if it has the same or smaller size as the hole.
 *  The function should return false if the triangle with that dimensions is not possible.
 */

/**
 *  Checks whether a triangle is valid given the lengths of its sides.
 * 
 *  Returns false if any one side is greater than the sum of the other two sides.
 *  Otherwise, returns true.
 */
function isTriangleValid(triangle) {
    let a = triangle[0];
    let b = triangle[1];
    let c = triangle[2];

    if (a + b <= c) return false;
    if (a + c <= b) return false;
    if (b + c <= a) return false;
    return true;
}

/**
 *  Calculates the area of a triangle given the lengths of its sides.
 *      -- Using Heron's formula
 */
function getArea(triangle) {
    let a = triangle[0];
    let b = triangle[1];
    let c = triangle[2];

    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function doesTriangleFit(triangle1, triangle2) {
    let area1 = isTriangleValid(triangle1) ? getArea(triangle1) : null;
    let area2 = isTriangleValid(triangle2) ? getArea(triangle2) : null;

    console.log('Triangle1 Area: ', area1, 'Triangle2 Area:', area2);
    if (area1 == null || area2 == null) return false;
    if (area1 > area2) return false;
    return true;
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));