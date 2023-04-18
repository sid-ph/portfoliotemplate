const form = document.querySelector('.contact-form');
const submitButton = document.querySelector('#submit-form');
const toast = document.querySelector('.toast');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitButton.disabled = true;
  
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxD_fsf_rXnLM5_i2n8dLYI8FPr2gxMWRIFvHRjcXYCSSzHGn1hAZNHfSHz9Tr47d6g/exec', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      showSuccessToast();
    } else {
      showErrorToast();
    }
    submitButton.disabled = false;
    form.reset();
  };
  xhr.send(formData);
});

function showSuccessToast() {
  toast.textContent = 'Form submitted successfully.';
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}

function showErrorToast() {
  toast.textContent = 'Error submitting form. Please try again later.';
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 3000);
}