 const arr =[2,5,3,9,6,8];
 for ( let i=0; i<arr.length; i++){
    console.log(arr[i]);
 }
 console.log("--------for of loop ---------");
 for (let n of arr){
    console.log(n);
 }

 console.log("----for each  function----")
 arr.forEach((a,b,c) => {
    console.log(a,b,c);
 });
  
 console.log("----square of array----")

 arr.forEach((x) => {

  console.log(x**2)
 });

 // prin odd numbers
 console.log("----- odd numbers ------")

 arr.forEach ((z)=>{
    if(z%2!==0){

    console.log(z)}
 });


 console.log("---even number in new array--")

 const narr=[];
 arr.forEach((y)=>{
    if (y%2==0){
        narr.push(y);
    }

 })
        console.log(narr);

console.log("---cube of each array-----")
const cu_array=[]
arr.forEach((c)=>{
    cu_array.push(c*c*c)
    


}
)
console.log(cu_array)
