const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
passwordInput = document.querySelector(".input-box input"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxys",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "~!@#$%^&()[]{}></?*+-="
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}
updateSlider();

const generatePassword = () => {
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value;
    let duplicate = false;

    options.forEach(option => {
        if(option.checked){
            if (option.id != "duplicate" && option.id != "spaces") {
                staticPassword += characters[option.id];
            }else if(option.id === "spaces"){
                staticPassword += ` ${staticPassword} `;
            }else{
                    duplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
            let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
            if(duplicate){
                !(randomPassword).includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
            }else{
                randomPassword += randomChar;
            }
    }

    console.log(randomPassword);
    
}

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);