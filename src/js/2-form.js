'use strict';

const form = document.querySelector('.feedback-form');

if (!form) {
  console.warn(
    'Элемент .feedback-form не найден на странице. Скрипт формы не будет выполнен.'
  );
} else {
  const STORAGE_KEY = 'feedback-form-state';

  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';

  form.addEventListener('input', event => {
    const formData = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    if (!formData.email || !formData.message) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  });
}
