function checkPalindrome(){
    let str = document.getElementById("string").value;
    const display = document.getElementById("display");
    const icon = document.getElementById("resicon")

    if (str == ""){
        display.textContent = "Enter something first";
        resicon.src = "./icons/warn.svg";
        resicon.style.visibility = "visible";
        resicon.classList.remove("shake");
        resicon.classList.remove("scale");
        resicon.classList.add("anim");
        return 0;
    }

    str = str.toLowerCase();
    passers = [",", ".", "?", "!", "/", ";", "'", " ", ":", "/", "(", ")", "[", "]", "&"];
    palindromeArray = [];

    strArray = str.split("");

    strArray.forEach(element => {
        if (!passers.includes(element)){
            palindromeArray.push(element);        
        };
    })

    original = palindromeArray.join("");
    newString = palindromeArray.reverse().join("");
    
    if (original === newString){
        display.textContent = "It is a palindrome";
        resicon.src = "./icons/success.svg";
        resicon.style.visibility = "visible";
        resicon.classList.remove("anim");
        resicon.classList.remove("shake");
        resicon.classList.add("scale");
    }else{
        display.textContent = "Not a palindrome";
        resicon.src = "./icons/failure.svg";
        resicon.style.visibility = "visible";
        resicon.classList.remove("anim");
        resicon.classList.remove("scale");
        resicon.classList.add("shake");
    }
}
