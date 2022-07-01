const slider = document.querySelector(".slider");
const value = document.querySelector(".sliderValue");

slider.addEventListener("change", ()=>{
    value.innerText = slider.value;
});