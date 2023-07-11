const input = document.getElementById('myInput');
const button = document.getElementById('myBtn');
const removeBtn = document.getElementById('delete');

removeBtn.style.backgroundColor = "red";
button.style.backgroundColor = "green";
button.style.color = "white";
removeBtn.style.color = "white";

button.addEventListener('click', () => {
    // alert(input.value)
    localStorage.setTimeout("key1", input.value)
    input.value = ''
})
removeBtn.addEventListener('click', () => {
    // console.log(localStorage.getItem('key1'))
    localStorage.clear()
//    localStorage.key(0)
})
const arr = [{ key1: "pratyush" }, { key2: "angshu" }]
if (localStorage.getItem('key1')) {
    alert(localStorage.getItem('key1'))

}