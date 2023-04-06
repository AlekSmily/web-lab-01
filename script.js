// Встановлюємо дату, до якої ми рахуємо зворотній відлік
var countDownDate = new Date("Apr 30, 2023 23:59:59").getTime();

// Оновлюємо таймер кожну секунду
var x = setInterval(function() {

  // Отримуємо поточну дату та час
  var now = new Date().getTime();

  // Знаходимо різницю між поточним часом та датою зворотнього відліку
  var distance = countDownDate - now;

  // Розраховуємо дні, години, хвилини та секунди, що залишилися
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Виводимо розрахований час в елемент з id "timer"
  document.getElementById("timer").innerHTML = days + "д " + hours + "г " + minutes + "хв " + seconds + "с ";

  // Якщо час вже вичерпано, зупиняємо таймер та виводимо повідомлення
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Час вичерпано!";
  }
}, 1000);
