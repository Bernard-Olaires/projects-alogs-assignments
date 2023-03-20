// Given an array, index, and additional value, insert the value into array at given index. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, value) {
    for(let i = arr.length; i >= index; i--) {
        arr[i] = arr[i-1]
    }
    arr[index] = value
    return arr
}

console.log(insertAt([9,33,7], 1, 42))