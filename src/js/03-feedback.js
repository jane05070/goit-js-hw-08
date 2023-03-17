import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = form.elements;

const onFormInput = () => {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

const onFormSubmit = event => {
      event.preventDefault();
    if (email.value === '' || message.value === '') 
    { 
        alert('Заповніть поле');
        return;
    }

  console.log({ email: email.value, message: message.value });
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}

const onPageReset = () => {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }

    }


onPageReset();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);