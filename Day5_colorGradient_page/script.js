let form = document.querySelector("form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("#element");

let direction = document.querySelectorAll('input[name="direction"]');


const setGradient = (event) => {
    event.preventDefault();
    let selectValue;
    for (const v of direction){
        if (v.checked){
            selectValue = v.value;
        }
    }

    console.log("wow, it is actually working");
    console.log(color1.value);
    console.log(color2.value);
    console.log(direction);
    console.log(selectValue);

    document.body.style.backgroundImage = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    text.textContent =`background-image: linear-gradient(to right, ${color1.value}, ${color2.value});`;
};
form.addEventListener("change", setGradient);
/* form.addEventListener("mouseover", setGradient); */

