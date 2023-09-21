

document.getElementById("subscription").addEventListener("submit", (err)=>{
    err.preventDefault()

    let name = document.getElementById("name").value
    // console.log(name)
    let email = document.getElementById("email").value
    // console.log(email)
    let phone = document.getElementById("phone").value
    // console.log(phone)
    let country = document.getElementById("country").value
    // console.log(country)
    let agreements = document.getElementById("agreements")
    // console.log(agreements)

    let error = document.getElementById("error")
    error.innerHTML =""

    if(name.length == 0){
        error.innerHTML = "Username can not be empty"
        return
    }
    if(valEmail(email) == false){
        error.innerHTML = "Email must contain the character '@' and ends with '.com'"
        return
    }
    if(valPhone(phone) == false){
        error.innerHTML = "Phone number must contain only numbers and be at least 10 digits"
        return
    }
    if(valCountry(country) == false){
        error.innerHTML = "Country must start with capital letters"
        return
    }
    if(agreements.checked == false){
        error.innerHTML = "You must agree to the Term & Conditions!"
        return
    }

    let result = confirm("Is the information you provided correct?")
    if(result == true){
        console.log("Submitted")
    }else{
        console.log("Canceled")
    }


}
)

function valCountry(country){

    return (country.charCodeAt(0) >=65 && country.charCodeAt(0) <=90)
}

const valPhone = (phone) => {

    let length = phone.length
    let isNumericOnly = false
    let numberCount = 0

    if(length <10){
        return false
    }

    for(let i = 0;i<length;i++){

        if(!isNaN(phone[i])){
            numberCount++;
        }
    }

    if(numberCount==length){
        return true
    }else{
        return false
    }
}

function valEmail(email){
    return email.indexOf("@") != -1 && email.endsWith(".com")
}
