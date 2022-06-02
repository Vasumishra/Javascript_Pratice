const numbers = [1,2,5,8,-1,-2,2,6]
const numbers1=numbers.find(item=>item == 2)
console.log(numbers1)

const numbers2=numbers.find((item)=>item == 2)
console.log(numbers2)

const numbers3=numbers.find(item=> {return item == 2})
console.log(numbers3)


