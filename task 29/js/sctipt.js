//функция берет данные с формы и отправляет их на сервер
function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);

      fetch('/api/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert('Данные успешно отправлены!');
      })
      .catch(error => {
        console.error('Ошибка отправки данных:', error);
      });
    });
  }