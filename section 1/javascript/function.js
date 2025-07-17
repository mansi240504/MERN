function addnums(a, b) // first way to declare functon
{
    var c = a + b;
    console.log(c);


}
addnums(3, 5);

// second way to declare function

const avgNums = function (a, b, c) {
    const avg = (a + b + c) / 3;
    //console.log( avg);
    return avg;
}
const result = avgNums(47, 52, 30);
console.log(result);

//arrow funtion 
const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;

    }
    
    return f;
}
const fact = factorial(5);
console.log(fact);
