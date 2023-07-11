const heading=document.getElementById('heading');
const btn=document.getElementById('btn');
const box1=document.getElementById('box1');
const input=document.querySelector('input');


btn.addEventListener("click", (e)=>{
    // console.log("clicked")
    e.preventDefault();
    box1.style.backgroundColor="red";
    box1.style.padding="30px";
    box1.style.color="white";
})

btn.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
    btn.style.backgroundColor="green";
    box1.removeEventListener("mouse")
})

btn.addEventListener("mouseover", ()=>{
    btn.style.transform="scale(1.1)";
})

btn.addEventListener("mouseout", ()=>{
    btn.style.transform="";
})

// window.print()

addEventListener("contextmenu", (e)=>{
    // e.preventDefault();
    btn.style.filter="blur(2px)";
})

box1.addEventListener("dblclick", (e)=>{
    e.preventDefault();
    document.body.style.backgroundColor="black";
});
box1.addEventListener("click", ()=>{
    document.body.style.backgroundColor="white";
});


// addEventListener("click", (e)=>{
//     console.log(e.clientX, e.clientY) //mouse coordinates
// })


input.addEventListener("change",(e)=>{
    console.log(e.target.value)
})