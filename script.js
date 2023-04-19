var form = document.querySelector('#contact-form');
var submitButton = document.querySelector('#submit');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var formData = new FormData(form);

  submitButton.disabled = true;

  fetch('https://script.google.com/macros/s/AKfycbxD_fsf_rXnLM5_i2n8dLYI8FPr2gxMWRIFvHRjcXYCSSzHGn1hAZNHfSHz9Tr47d6g/exec', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Form submitted successfully!');
    form.reset();
    submitButton.disabled = false;
  })
  .catch(function(error) {
    console.error('There was a problem with the fetch operation:', error);
    alert('Sorry, there was an error submitting the form. Please try again later.');
    submitButton.disabled = false;
  });
});
