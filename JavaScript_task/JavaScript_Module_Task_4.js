function double() {
    var array = [0, 2, 4, 6, 8, 10, 12, 14, 16]
    console.log("This is exactly Double of what array value is:")
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
        console.log(array[i]);
    }


}
double();


function half() {
    var input = [0, 2, 4, 6, 8, 10, 12, 14, 16]
    console.log("This is exactly half the element value in array")
    for (var i = 0; i < input.length; i++) {
        input[i] = input[i] / 2;
        console.log(input[i]);
    }
}
half()