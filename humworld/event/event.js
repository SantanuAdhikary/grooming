
let hello = ()=>{
    // console.log('hello....')
    alert("hello...")
}

// hello()


let add = ()=>{
    let a = 10 
    let b = 20 

    alert(a+b)
}




let btn = document.getElementById("btn")

console.log(btn)

btn.addEventListener("click", ()=>{
    let a = 10 
    let b = 5 

    alert(a -b)
})


btn.addEventListener("click",()=>{
    let a = 30 ;
    let b = 2

    console.log(e)

    alert(a+b)
    console.log(a+b)
})


let btn2  = document.getElementById("btn2")


btn2.addEventListener("click",(e)=>{

    console.log(e.target.innerText)


    console.log('button clicked..')
})



let form = document.getElementById("f")

// console.log(form)

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    // console.log('form submitted')

    let num1 = parseInt( document.getElementById("num1").value)
  

    let num2 =parseInt( document.getElementById("num2").value)
    // console.log(num1,num2)

    // console.log(num1 + num2)
    let add = num1 + num2

    let output = document.querySelector(".output")

    let table = document.getElementById("table")

    // output.innerHTML = ` <h1> the addition of ${num1} and ${num2} is ${add}</h1>`

    let tr = document.createElement("tr")

    tr.innerHTML= ` 
    <td>${num1}</td>
    <td>${num2}</td>
    <td>${add}</td>
`

table.append(tr)

})