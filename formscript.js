const contactForm = document.getElementById('contact-form')
const submitButton = document.getElementById('submit')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let firstname = document.getElementById('first-name')
    let lastname = document.getElementById('last-name')
    let email = document.getElementById('email')
    let reason = document.getElementById('reason')

    if (firstname.value == "" || lastname.value == "" || email.value == "" || reason.value == "") {
        alert("Ensure you input a value in all fields!");
    } 
    
    else {
        submitButton.disabled=true
        window.location.href = window.location.origin + '/thanks.html'
    }
});