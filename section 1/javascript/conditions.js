const age =20;
if(age>=18)
{
    console.log("eligible");
}
else{
    console.log("not eligible");
}
for (let i=23; i<=48 ; i++)
{
    if(i%2!==0)
    {
        console.log(i);
    }
    
}
console.log()
let m=43562;
let rev=0;
while (m>0){
    console.log(m,rev);

    let d=m% 10;
    rev=rev*10+d;
    m=parseInt(m/10);

}
console.log(m,rev)
