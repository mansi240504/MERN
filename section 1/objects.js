const user ={
    name :'Mansi',
    email : "mansi@hgmail.com",
    password: "mansi123"

}
console.log(user.name);
 user.name="khushi";
 console.log(user.name);

 user.course ="MERN Stack";
 console.log(user.course)

 user.sgpa="8.63";
 console.log(user.sgpa);

 delete user.password;
 console.log(user);

 console.log( Object.keys(user));
 console.log(Object.values(user));
 console.log(Object.entries(user));

 const Smartphone ={
     brand: "Motorola",
     Price:"21000",
     Color:["Red","Blue","Black",[1,2,3,4,5,6]],
     Model:" Motorola edge 50 neo"

 }
 console.log(Smartphone .Color[3][2]);
 Smartphone.Color.push("Silver");
 console.log(Smartphone)
 
    
 Smartphone.Color.pop();
 console.log(Smartphone);
 Smartphone.Color.unshift("Violet")
 console.log(Smartphone); 