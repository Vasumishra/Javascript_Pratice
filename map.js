let Arr = [
  {firstName:'aman',lastName:'mishra',age:25},
  {firstName:'naman',lastName:'mishra',age:27}
]

// const Arrmap1 =Arr.map(item => item.age)
// console.log(Arrmap1)

// const Arrmap2 =Arr.map((item) => item.age)
// console.log(Arrmap2)

// const Arrmap3 =Arr.map(item => {return item.age})
// console.log(Arrmap3)


// const CapArr1 = Arr.map(item => item.firstName.toUpperCase())
// console.log(CapArr1)

// const CapArr2 = Arr.map((item) => item.firstName.toUpperCase())
// console.log(CapArr2)

// const CapArr3 = Arr.map(item => {return item.firstName.toUpperCase()})
// console.log(CapArr3)

const firstCap = Arr.map(item => {return item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1)});
console.log(firstCap)
