'use strict';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Проверяем, есть ли форма на странице
if (form) {
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;

  loadFormData();

  form.addEventListener('input', onInput);
  form.addEventListener('submit', onSubmit);

  function onInput() {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email || '';
      messageInput.value = message || '';
    }
  }

  function onSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
      alert('Please fill in both fields.');
      return;
    }

    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }
} else {
  console.warn('Форма не найдена на странице, скрипт не выполнен');
}
