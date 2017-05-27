$(document).ready(function() {
var clock;
clock = $('.clock').FlipClock({
    clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
    autoStart: false, //Отключаем автозапуск
    countdown: true	, //Отсчет назад
    language:'ru-ru', //Локаль языка
    callbacks: { //Действие после окончания отсчета
    stop: function() {

      clock.setTime(getSecondsToTomorrow());
      clock.setCountdown(true); //Устанавливаем отсчет назад
      clock.start(); //Запускаем отсчет
       	}
       }
    });

    function getSecondsToTomorrow() {
     var now = new Date();

     // создать объект из завтрашней даты, без часов-минут-секунд
     var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+4);

     var diff = tomorrow - now; // разница в миллисекундах
     return Math.round(diff / 1000); // перевести в секунды
   }
    clock.setTime(getSecondsToTomorrow());
    clock.setCountdown(true); //Устанавливаем отсчет назад
    clock.start(); //Запускаем отсчет
});
