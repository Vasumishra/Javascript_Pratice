// console.log("hello")

// let x = 6
// let y = 3
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// console.log(x % y)
// console.log(x++)
// console.log(--y)

// let check = x >= 6 && y>2
// console.log(check)

// let check1 = x<= 5 || y<2
// console.log(check1)

// console.log(2 + '3')
// console.log(true + 'false')
// console.log('4'*'2')
// console.log('4'/'2')
// console.log('3'- true)
// console.log('4'-null)
// console.log(9 - "5");

// STRING METHOD
// let str = "Lorem ipsum dolor sit amet"
// console.log(str.slice(2,10)) // count 0 to 9
// console.log(str.slice(0,-12))
// console.log(str.substring(0,8))
// console.log(str.substr(8,8))// start and length

// STRING SEARCH
// let str1 = "Please locate where locate occurs!";
// console.log(str1.indexOf("locate"))
// console.log(str1.lastIndexOf("locate"))
// console.log(str1.startsWith("Please"))
// console.log(str1.endsWith("!"))

// const color = 'red'
// switch (color) {
//     case 'red':
//     console.log("color is red")
//     break;

//     default:
//     console.log("others")
//     break;
// }

//  for(var i=1;i<=5;i++){
//      console.log(i)
//  }
//  console.log(i)

//  for(let i=1;i<=5;i++){
//      console.log(i)
//  }

// let i = 1
// while (i<=5) {
//     console.log('number ' + i)
//     i++
// }

// ARRAY
// const myArr=[1,2,3,4,5]
// for (const num of myArr) {
//     console.log(num)
// }

// let arr = [1,3,5,7,9]
// console.log(arr.pop())
// console.log(arr.push(10))
// console.log(arr.shift())
// console.log(arr.unshift(11))
// console.log(arr[1] = 4)
// console.log(delete arr[4])
// console.log(arr)

// let arr = [1,3,5,7,9]
// console.log(arr.slice(1,4))
// arr.splice(1,3,"hello")// starting and range
// console.log(arr)

// const object ={
//     "firstName":"ssss",
//     "lastName":"wwww",
//     "age":20
// }
// console.log(person.firstName)

// const arr = [1,,2,3,4,5]
// console.log(arr[0])

// const x = (x, y) => x * y
// console.log(x(5,5))

// const x = (a,b)=> ({a,b})
// const y = (a,b)=>{return {a,b : (x)=>{console.log(x);return x}}}

// console.log(x(2,3))
// console.log(y(2,3))

// const z = y(7)
// console.log(z)
// console.log(z.b("l"))

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// forEach
// companies.forEach(function (company, index) {
//   console.log(company.name, index);
// });

// Filter
// const RetcomFilter = companies.filter(company=>company.category === 'Finance')
// console.log(RetcomFilter)

// const yearsFilter = companies.filter(company=>(company.start >= 1985 && company.start<1999))
// console.log(yearsFilter)

// const listedFilter = companies.filter(company=>(company.end-company.start > 20));
// console.log(listedFilter)

// Map
// const comMap = companies.map((company)=>`${company.name} -- ${company.start} -- ${company.end}`)
// console.log(comMap)

// Sort
// const comSort = companies.sort((c1,c2)=>{
// if(c1.start>c2.start){
//     return 1
// }else{
//     return -1
// }
// })
// console.log(comSort)

// Find 
// const comFind = companies.find((company)=>{
//     return company.cate === "Technology"   
// })
// console.log(comFind)

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let age = [];
// for(i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         age.push(ages[i])
//     }
// }
// console.log(age)
        
// const perAge = ages.filter(function(age){
//     if(age>= 21){
//      return true;
//     }
// })
// console.log(perAge)
                          
// const perAge = ages.filter((age)=>(age>=21));
// console.log(perAge)


// Reduce
// const total = 0;
// const ageTotal = ages.reduce((total,age)=>{
//     return total+age
// })
// console.log(ageTotal)


// let userObj={
//   name:'Ninja',
//   age:30,
//   email:'ninja123@gmail.com',
//   location:'IND🙏',
//   blogs:['Lorem ipsum dolor','lorem ipsum dolor sit','ydewedduywsyvsqjsvqlsqlsq'],
//   login:function(){
//     console.log('logged in')
//   },
//   myblogs:function(){
//     this.blogs.forEach(blog=>{
//       console.log(blog)
//     })
//   }

// }
// userObj.login()
// userObj.myblogs();


// userObj['contactno'] = 9876543210
// console.log(userObj.blogs[0])

// console.log(Math.round(5.49))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.1))
// console.log(Math.round(Math.random()*10))


// let num1 = 50;
// let num2 = num1;
// num1=100

// console.log(num1)
// console.log(num2)

// ------------------------------------------------------------------------------
// const x = (item,i)=>{
//   console.log(`${i+1} => ${item}`)
// }
// let Number = [6,7,8,9]
// let y = Number.forEach(x);


// for(i=0;i<Number.length;i++){
//   console.log(`Element ${i+1} --> ${Number[i]*2}`)
// }

// --------------------------------------
// let x = "3"
// let y =2.3
// let z = "a"
// // console.log(`${x}x`)
// console.log(x+" element "+z)
// console.log(`${x} element ${z}`)
// --------------------------------------

function Calc(num1,num2,sign) {
  switch(sign){
    case '+':
      let sum = num1+num2
      return sum
      
    case '-':
      let sub = num1-num2
      return sub

    case '*':
      let multiple = num1*num2
      return multiple

    case '/':
      let divide = num1/num2
      return divide

    default:
      return none
  }
}
console.log(Calc(6,7,'+'))
console.log(Calc(6,7,'-'))








// function add(a,b){
//   return a+b
// }
// console.log(add(5,5))