import throttle from 'lodash.throttle'

const form = document.querySelector(".feedback-form");
let feedback = {}

function addFeedback (e) {
  if (e.target.value.trim() !== "") {
    feedback[e.target.name] = e.target.value.trim()
    try {
      localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  }
}

function onFormSubmit (e) {
  e.preventDefault()
  e.currentTarget.reset()

  console.log (feedback)
}

function checkLocalStorage () {
  const feedbackFromStorage = localStorage.getItem("feedback-form-state")
  if (feedbackFromStorage !== null)
  try {
    feedback = JSON.parse(feedbackFromStorage);
    !feedback.email ? '' : form[0].value = feedback.email
    !feedback.message ? '' : form[1].value = feedback.message
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
}

form.addEventListener("input", throttle(addFeedback, 500))
form.addEventListener("submit", onFormSubmit)
window.addEventListener("load", checkLocalStorage)