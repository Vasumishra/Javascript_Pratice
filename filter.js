// const number =[1,2,3,4,-1,-2,0,4]

// const filtered1 = number.filter(function(value){
    //     return value > 2
    // })
    // console.log(filtered1)
    
    // const filtered2 = number.filter(item => item > 2) 
    // console.log(filtered2)
    
    // const filtered3 = number.filter((item) => item > 2) 
    // console.log(filtered3)
    
    // const filtered4 = number.filter(item => {return item > 2}) 
    // console.log(filtered4)
    
    // const number =[{name : "jay",age :23},{name: "vasu",age : 25},{name : "asds",age : 50}]
    // const age = number.filter(item=>item.age<=25)
    // console.log(age)


const person = [
    {name:"aman",age:28,email:"aman@gmail.com"},
    {name:"raman",age:20,email:"raman@gmail.com"},
    {name:"naman",age:22,email:"naman@gmail.com"},
]

function personAge(arr,age) {
    if(age< 0){
        return undefined
    }
    const filteredAge = arr.filter(ele=>
        {if(ele.age <= age){
            return false
        }else {return true}
        })
    return filteredAge
}
console.log(personAge(person,20))