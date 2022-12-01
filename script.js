const lengthSlider = document.querySelector(".pass-length input");

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}

lengthSlider.addEventListener("input", updateSlider)
