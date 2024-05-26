


document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const targetDiv = document.getElementById("JIK");
  // Добавляем обработчик события нажатия на кнопку
  scrollButton.addEventListener("click", function () {
    // Используем метод scrollIntoView для прокрутки к целевому элементу
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton2");
  const targetDiv = document.getElementById("JIR");
  scrollButton.addEventListener("click", function () {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton3");
  const targetDiv = document.getElementById("JIU");
  scrollButton.addEventListener("click", function () {
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });
});

