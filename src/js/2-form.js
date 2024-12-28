
const formInfo = document.querySelector(`.feedback-form`);

let formData = {
email: "",
message: "",
};

const enteringFormInfo = () => { 
    try {         
    const returnFeedbackFormInfo = JSON.parse (localStorage.getItem(`feedback-form-state`));

    if (returnFeedbackFormInfo === null) {return};

    formData = returnFeedbackFormInfo;

    for (const key in returnFeedbackFormInfo) {
    formInfo.elements[key].value = returnFeedbackFormInfo[key];}}

    catch (error) {console.log(error);}
};

enteringFormInfo();



formInfo.addEventListener('input', (event)=>{
 
 event.target.name === `email`?
    formData.email = event.target.value.trim():formData.message = event.target.value.trim(); 

    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData))
    });



    formInfo.addEventListener(`submit`, event =>{
        event.preventDefault();

        if ( formInfo.email.value.trim().length == 0 || formInfo.message.value.trim().length == 0) {alert `Fill please all fields`} 
        else { console.log(formData);
        localStorage.removeItem(`feedback-form-state`);
        formInfo.reset();}
    })