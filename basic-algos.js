// # // Print 1-255
// # // Print1To255()
// # // Print all the integers from 1 to 255. 

for(i=1; i<256; i++){
    console.log(i)
}


// # 2. Print Odds 1-255
// # PrintOdds1To255()
// # Print all odd integers from 1 to 255. 

for(i=1; i<256; i++){
    if(i%2!=0){
        console.log(i)
    } 
}


// # // 3. Print Ints and Sum 0-255
// # // PrintIntsAndSum0To255()
// # // Print integers from 0 to 255, and with each integer print the sum so far. 

var sum = 0;
for (i=0; i<=255; i++) {
    sum += i;
    console.log(i + ', ' + sum);
}

// # 4. Iterate and Print Array
// # Iterate through a given array, printing each value. 
// # PrintArrayVals(arr)

var arr = [1, 3, 5, 'jack', 'a', 15]

for(i=0; i<arr.length; i++){
    console.log(arr[i]);
}



// # // 5. Find and Print Max
// # // PrintMaxOfArray(arr)
// # // Given an array, find and print its largest element. 

var arr = [1, 20, 3, 10, 5];

var max = arr[0];

for(i=0; i<arr.length; i++) {

    if (arr[i] > max) {
        max = arr[i];
    }

}

console.log(max);



// # 6. Get and Print Average
// # PrintAverageOfArray(arr)
// # Analyze an array’s values and print the average. 

var arr = [2, 4, 7, 11, 10];

function findAvg(arr) {
    var sum = 0;
    for(i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    var avg = sum / arr.length;
    console.log(avg);
}

findAvg(arr);

// # // 7. Array with Odds
// # // ReturnOddsArray1To255()
// # // Create an array with all the odd integers between 1 and 255 (inclusive).  

var arr = [];

for(i=0; i<256; i++) {
    if(i%2!=0) {
        arr.push(i);
    }
}

console.log(arr);


// # 8. Square the Values
// # SquareArrayVals(arr)
// # Square each value in a given array, returning that same array with changed values. 

var arr = [2, 3, 6, 12];

for(i=0; i<arr.length; i++){
    arr[i] = arr[i] * arr[i];
    
}
console.log(arr);


// # // 9. Greater than Y
// # // ReturnArrayCountGreaterThanY(arr, y)
// # // Given an array and a value Y, count and print the number of array values greater than Y. 

var arr = [4, 6, 1, 7, -12, 22];
var y = 3;
function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    
    for(i=0; i<arr.length; i++){
        if(y < arr[i]) {
            count++;
        }
    }
    console.log(count);
}
ReturnArrayCountGreaterThanY(arr, y);



// # 10. Zero Out Negative Numbers
// # ZeroOutArrayNegativeVals(arr)
// # Return the given array, after setting any negative values to zero. 

function ZeroOutArrayNegativeVals(arr) {
    for(i=0; i<arr.length; i++){
        if(arr[i]<0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

ZeroOutArrayNegativeVals(xyz);



// # // 11. Max, Min, Average
// # // PrintMaxMinAverageArrayVals(arr)
// # // Given an array, print the max, min and average values for that array.

// Functions allow you to automate or reuse code snippets
function PrintMaxMinAverageArrayVals(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for(i=0; i<arr.length; i++){
        // find max
        if ( arr[i]> max ) {
            max = arr[i];
        }
        // find min
        if(arr[i]<min) {
            min = arr[i];
        }
        // get sum
        sum += arr[i];
    }
    // calculate avg
    var avg = sum / arr.length;
    console.log("max: " + max + " min: " + min + " avg: " + avg );

}

// This is creating arrays that we can pass to our function above. 
var xyz = [1, 0, 12, -5, 16, -22, -33, -5];

// In order for a function to actually compile you must call it.
PrintMaxMinAverageArrayVals(arrabc);
PrintMaxMinAverageArrayVals(xyz);
PrintMaxMinAverageArrayVals([2, 4, -5, 5, 3, 12]);



// # 12. Shift Array Values
// # ShiftArrayValsLeft(arr)
// # Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
var arrabc = [5, 9, 10, 13, 17]; // ==> [9, 10, 13, 17, 0]

function ShiftArrayValsLeft(arr) {

    for(i=0; i<arr.length; i++){
        // If we are not at the end of the array -> (because at the end there is no following value)
        if(arr[i] != arr.length-1) {
            // set current index to the value of the next index
            arr[i] = arr[i + 1];
        }
    }
    // set the end index of the array to value of 0
    arr[arr.length-1] = 0;

    // print to the console
    console.log(arr);

}
// call function
// ShiftArrayValsLeft(arrabc);

// # // 13. Swap String For Array Negative Values
// # // SwapStringForArrayNegativeVals(arr)
// # // Given an array of numbers, replace any negative values with the string 'Dojo'.

var arrNeg = [-5, 33, -16, -2, 3, 1, -5, 2];

function SwapStringForArrayNegativeVals(arr){

    // iterate through the array
    for(i=0; i<arr.length; i++){
        // check if index's value is negative
        if(arr[i]<0){
            // if its negative replace that value in the array with 'Dojo'
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}
SwapStringForArrayNegativeVals(arrNeg);