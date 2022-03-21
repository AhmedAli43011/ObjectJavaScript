// An object in JavaScript is a data type.
// that is composed of a collection of names or keys and values, 
// represented in name:value pairs

// In Arrow function this is not work 

// const gimli = {
//     name: 'Gimli',
//     race: 'dwarf',
//     weapon: 'axe',
//     greet: function ()  {
//       return `Hi, my name is ${this.name}!`
//     }
 
//   }
//   for(let key in gimli){
//     console.log(key.toUpperCase() + ':',gimli[key])
// }
//   console.log(gimli.greet())

// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//       const accepting = this.isAvailable
//         ? 'is accepting applications'
//         : 'is not currently accepting applications'
  
//       console.log(
//         `The ${this.position} position is ${this.type} and ${accepting}.`
//       )
//     },
//   }
  
//   // Use Object.create to pass properties
//   const a = Object.create(job)
  
//   a.position = 'accountant';
//   a.type = 'daily'
//   a.showDetails()

// const employees = {
//   boss: 'Michael',
//   secretary: 'Pam',
//   sales: 'Jim',
//   accountant: 'Oscar',
// }

// // Get the keys of the object
// const keys = Object.keys(employees)

// console.log(keys)

// Object.keys(employees).forEach((key)=>{
//   let value = employees[key]
//   console.log(`${key}":" ${value}`)
// })

// let user = { // belongs to another code
//   name: "John"
// };
// let user1 ={name:"Ahmed"};
// let id = Symbol("id");

// user[id] = "here";
// user1[id] = "there"
// console.log(user,user1)

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };

// // conversions demo:
// console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

// const operatingSystem = {
//   name: 'Ubuntu',
//   version: 18.04,
//   license: 'Open Source',
// }
// const entries = Object.entries(operatingSystem)

// // Loop through the results
// entries.forEach((entry) => {
//   let key = entry[0]
//   let value = entry[1]

//   console.log(`${key}: ${value}`)
// })

// const user ={
//   name:"Ahmed",
//   age:29,
//   position:"internee",
//   type:"houry",
//   isAvailable:true,
//   person(){
//     const accepting = this.isAvailable ? "is accepting" : "is not accepting";
//     console.log(`${this.position} work ${this.type} and ${accepting}`)
//   }
// };
// const personName = Object.create(user);
// personName.name="awan"
// personName.person()

// let user = {};

// console.log(user.address && user.address.street && user.address.street.name);

 function User(name,age){
   this.name = name;
   this.age = age;
 }
 let user = new User("ahmed",30)
 console.log(user)