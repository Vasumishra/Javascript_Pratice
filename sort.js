// const num = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// const num1 = num.sort((a,b)=>a-b)
// console.log(num1);

// const num2 = num.sort((a,b)=>{return a-b})
// console.log(num2);

// const names = ['raman', 'aman','Pawan','naman']
// const name1=names.sort((a,b)=>{
//     var name1 = a.toLowerCase(), name2 = b.toLowerCase()
//     if(name1>name2){
//         return 1
//     }if(name2>name1){
//         return -1
//     }
// })
// console.log(name1)

// const name2=names.sort((a,b)=>{return a-b}).reverse()
// console.log(name2)


// const num = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// function Numericsort(arr, order) {
//     if(order !== "asc" && order!== "dsc"){
//         return undefined
//     }
//   const sortList = arr.sort((ele, item) => {
//       if(ele>item) return order === "asc" ? 1 : -1
//       if(ele<item) return order === "asc" ? -1 : 1
//   });
//   return sortList;
// }
// console.log(Numericsort(num,"asc"))


const names = ['raman', 'aman','Pawan','naman']

function Alphabatsort(arr,order) {
    if(order !== "asc" && order!== "dsc"){
        return undefined
   }

 const sortListed = arr.sort((ele1,ele2)=>{
     let v1 = ele1.toLowerCase(), v2 = ele2.toLowerCase()
     if(v2>v1) return order === "dsc" ? 1 : -1
     if(v2<v1) return order === "dsc" ? -1 : 1
 })
    return sortListed;
}
console.log(Alphabatsort(names,"asc"))
console.log(Alphabatsort(names,"dsc"))
console.log(Alphabatsort(names,"asasa"))

