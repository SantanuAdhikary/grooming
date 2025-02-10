
// !  how to access elements 


// !  target element by id

 let para =  document.getElementById("para")
 console.log(para)


 let haeading = document.getElementById("heading")

 console.log(haeading)

//  ! target elements by class

let cons =  document.getElementsByClassName("con")

console.log(cons)
console.log(cons[1])

// !  selecting by the selector

let p1=  document.querySelector("#para")
console.log(p1)


let con = document.querySelector(".con")
console.log(con)



// ! 2.  what is present inside element 


let con3 = document.querySelector(".con3")
// console.log(con3)

console.log(con3.innerText)
console.log(con3.innerHTML)



let con4 = document.querySelector(".con4")


con4.innerText = "hello how are you"

con4.innerHTML  = " <h1> this is container 4</h1> <p> i am para from js file</p>"


let a = 10 , b = 20 

let c = a+b

con4.innerHTML = ` <h1> the addition of ${a} and ${b} is ${c} </h1> `



// !  3. how to apply css 


con4.style.backgroundColor="pink" 
con4.style.color="white" 


// !  4. how to know the class 

let con5 = document.querySelector("#container5")

console.log(con5.classList)

con5.classList.add("dark")

console.log(con5.classList)

con5.classList.remove("san")

console.log(con5.classList)


// !  5. create element form js 


let div = document.createElement("div")

div.innerHTML = `<h1> I am container6</h1>`

div.classList.add("con6")


//!  after creatation display 

// con4.append(div)
// con4.prepend(div)
// con4.before(div)
con4.after(div)


