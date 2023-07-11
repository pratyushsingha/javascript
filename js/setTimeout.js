const btn = document.querySelector("button")

const printName = (name, male) => {
    let gender = male;
    if (gender) {
        gender = "male";
    } else {
        gender = "female";
    }
    const income=Math.floor(Math.random()*10000)
    console.log(`welcome ${name}.ur income is $${income}.gender is ${gender}`);
};

const id = setInterval(printName, 1000, "angshu", Math.random()*10000, false);

btn.addEventListener('click', () => {
    clearTimeout(id)
    // clearTimeout(customTimeout)
    // console.log(customTimeout)
})
