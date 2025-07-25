
const myarr=[32,91,52,65,22];
const sqrNums=myarr.map((a)=>{
    return a*a;
}
)
console.log(sqrNums);

const prices =[2300,3200,500,1250,800,5500];

const gst =prices.map((p)=>{
    return p*1.18;

}
);
console.log(gst);


 const budgetprices=prices.filter ((p)=>{
    return p<2000;
});
console.log(budgetprices);

const evenNum=myarr.filter((a)=>{
    return a%2==0;
})
console.log(evenNum)
const prices2=['₹456.89','₹2300.50','₹88.10','₹99.999' ];

console.log(parseInt('₹456.89'.slice(1)));

const smartphoneArray=[
    {
        brand: "Motorola",
     Price:"21000",
     Color:["Red","Blue","Black",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"
    },
    {
        brand: "Vivo",
     Price:"21000",
     Color:["Red","Blue","Black",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"
    },
    {
        brand: "Iphone",
     Price:"21000",
     Color:["Red","Blue","Black",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"
    },
    {
        brand: "Samsung",
     Price:"21000",
     Color:["Red","pink","yellow",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"
    },
    {
        brand: "Realme",
     Price:"2000",
     Color:["Red","Blue","Black",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"
    }
    

]
smartphoneArray.push("Silver");
console.log(smartphoneArray[2])


