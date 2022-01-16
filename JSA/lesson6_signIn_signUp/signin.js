let signInForm = document.getElementById("signInForm")

signInForm.onsubmit = (e) =>{
    e.preventDefault()
    let email = signInForm.email.value
    let password = signInForm.password.value

    console.log(email, password);
}


let setTextErr = (query, content) =>{
    document.querySelector(query).innerHTML = content
}
