const scriptURL = 'https://script.google.com/macros/s/AKfycbym4Z_KhSzgbEVH0rnk2Dw-sTLaNAOo_t60CtWfY7JYwVzGHHoTAY_hZHyhDb-agQ2G/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
