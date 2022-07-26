import throttle from 'lodash.throttle'

const form = document.querySelector(".feedback-form");
const submitButton = document.querySelector("button")

function addFeedback (e) {
    if (e.target.tagName === "INPUT") {
        try {
            localStorage.setItem("feedback-form-state", JSON.stringify(`{"email": ${e.target.value}}`));
          } catch (error) {
            console.error("Set state error: ", error.message);
          }
    } else if (e.target.tagName === "TEXTAREA") {
        try {
            localStorage.setItem("feedback-form-state", JSON.stringify(`{"email": ,"message": ${e.target.value}}`));
            console.log(localStorage.getItem("feedback-form-state"))
          } catch (error) {
            console.error("Set state error: ", error.message);
          }
    }

}

form.addEventListener("input", throttle(addFeedback, 500))


// loginButton.addEventListener("click", () => {
//     if (form[0].value.trim() === "" || form[1].value.trim() === "") {
//         alert("Всі поля повинні бути заповнені!")
//     } else {
//     form.addEventListener('submit', onFormSubmit); 

//     function onFormSubmit(event) {
//     event.preventDefault();

//     const email = event.currentTarget.elements.email.value
//     const password = event.currentTarget.elements.password.value

//     const formData = {
//         email,
//         password
//     }
    
//         console.log(formData)
        
//         event.currentTarget.reset()
// }}})