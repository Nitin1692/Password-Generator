const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
passIndicator = document.querySelector(".pass-indicator"),
generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxys",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "~!@#$%^&()[]{}></?*+-="
}



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

    passwordInput.value = randomPassword;
    
}

const updatePassIndicator = () => {
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check"
    setTimeout(() => {
        copyIcon.innerText = "copy_all"
    }, 1500);
}

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
copyIcon.addEventListener("click", copyPassword);