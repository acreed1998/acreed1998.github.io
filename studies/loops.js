// LOOPS //

// Loops are built-in constructs (features) of JavaScripts that allow us to //
// execute a block of code as many times as needed. They are very useful for //
// going over collections of data. //

// THE FOR LOOP //
// GREAT FOR GOING OVER ARRAYS!!! //

// Requires the following: //
// Initialization //
// Stop Condition //
// Incrementation //

var i;
for (i = 0; i <= 10; i++) {
    console.log(i);
}

var j;
var arr = [1,2,3,4,5,6];
for (j = arr.length; j >= 0; j--) {
    console.log(arr[j]);
}
// THE FOR-IN LOOP //
// DESIGNED FOR GOING OVER OBJECTS //

var persona = {st: 10, ma: 10, en: 10, ag: 10, lu: 10};
for (var key in persona) {
    console.log(persona[key]);
}

// THE WHILE LOOP //

var count = -1;
while (count < 10) {
    console.log(count);
    count++;
}

var count = 10;
while (count > 0) {
    console.log(count);
    count--;
}