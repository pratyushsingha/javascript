// // // console.log(document.head)
// // // const arr = document.body.children
// // // const newArr = Array.from(arr);
// // // console.log(newArr)
// // const thisOne="abhi"
// // console.log(document.getElementById("thisOne"))
// // console.log(document.getElementsByClassName("ok"))

// const thisOne=document.getElementById("thisOne")
// console.log(thisOne)
const thisOne=document.getElementsByTagName("span")
thisOne[0].style.color="red"
thisOne[0].textContent="Abhi"
thisOne[0].innerHTML=`<h1 class="myclass">Abhi</h1>`
thisOne[0].style.backgroundColor="navy"
console.log(thisOne[0])

const myBtn=document.getElementById("myBtn")
console.log(myBtn)
myBtn.style.backgroundColor="red"
myBtn.style.color="white"
myBtn.style.borderRadius="10px"
myBtn.style.cursor="pointer"

const btn=document.querySelector("#ok")
console.log(btn)
btn.innerText="pratyush dom manipulation"



console.log(myBtn.setAttribute("id","myBtn3"))

// const h2=document.createElement("h2")

// h2.innerText="by append method"
// document.body.append(h2)

const h3=document.createElement("h3")
h3.innerText="by prepend method"
document.body.prepend(h3)

function myFunc(){
    const h2=document.createElement("h2")

h2.innerText="by append method"
document.body.append(h2)
}


