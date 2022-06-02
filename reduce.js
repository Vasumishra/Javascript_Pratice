// const array = [
//   { id: 12, name: "toto" },
//   { id: 12, name: "toto" },
//   { id: 42, name: "tutu" },
//   { id: 12, name: "toto" },
//   { id: 11, name: "jay" },
//   { id: 11, name: "jay" },
// ];


// function add(a,b){
//  return a+b
// }
// let sum = add(4,5)
// console.log(sum)


// const finalResult = array.reduce((acc, person) => {
//     if (acc[person.name]) {
//     acc[person.name]++;
//   } else {
//     acc[person.name] = 1;
//   }
//   return acc;
// }, {});
//  console.log(finalResult)

// const idResult = array.reduce((total, items) => {
//   return total + items.id;
// }, 0);
// console.log(idResult);




// const data = 
// [
//   {
//     name: "cat 1",
//     products: [
//       {
//         color: "red",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_1.jpeg",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "cat 1",
//     products: [
//       {
//         color: "red",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_2.jpeg",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "cat 1",
//     products: [
//       {
//         color: "red",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_3.jpeg",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "cat 1",
//     products: [
//       {
//         color: "red",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_4.jpeg",
//           },
//         ],
//       },
//       {
//         color: "green",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_4.jpeg",
//           },
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_0.jpeg",
//           },
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_10.jpeg",
//           },
//         ],
//       },
//       {
//         color: "blue",
//         photos: [
//           {
//             full: "https://s3.ap-south-1.amazonaws.com/trendy.blinklinksolutions.com/Patola+4/photos/WINE_4.jpeg",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const listedData = data.reduce((acc,item)=>{
  
//   item.products.forEach((element) =>{
//     element.photos.forEach((photo)=>{
//       acc.push(photo.full)
//     })
//   })

//   return acc
  
// },[]) 
// console.log(listedData)

// ---------------------------------------------------------------------



//sample data
const array = [
  { id: 12, name: "toto" },
  { id: 12, name: "toto" },
  { id: 42, name: "tutu" },
  { id: 12, name: "toto" },
  { id: 11, name: "jay" },
  { id: 11, name: "jay" },
];

//sample input : 
// Persons("jay",array)
//sample output
// {name : "jay",count : 2}

// function person(name,arr){
//   const findName = arr.reduce((acc,item)=>{
//     if(acc.name === item.name){
//       acc.count++
//     }
//     return acc;
//   },{name,count:0})
//   return findName
// }
// console.log((person("toto",array)))
// console.log((person("tutu",array)))
// console.log((person("jay",array)))



// const sortedName = array.reduce(function Persons(acc,count){
//   if(acc[count.name]){
//        acc[count.name]++
//   }else{
//     acc[count.name] = 1
//   }
//   return acc
// },{})
// sortedName;
// console.log(sortedName)


// const sortedName = array.reduce(function Persons(acc,count){
//   if (acc !== null) return acc
//   if(count.name === "jay") return count
//   return null
// },null)
// sortedName;
// console.log(sortedName)



// function add(x,y) {
//   return x+y
// }
// const v = add(6,7)
// const u = add(9,21)
// const ans = add(u,v)
// console.log(ans)


