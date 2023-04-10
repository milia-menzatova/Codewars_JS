/* 
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

The some() method checks if any array elements pass a test (provided as a callback function).

The some() method executes the callback function once for each array element.

The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements.

The some() method does not execute the function for empty array elements.

The some() method does not change the original array.
*/

function isRubyComing(list) {
    return list.some(a => a.language ==='Ruby')
  }