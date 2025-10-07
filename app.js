const yourDate = new Date("2025-10-07T03:00:00"),
music = ['kousui', 'thuongemdengia', 'yeuemratnhieu'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");
      var audioEl = document.querySelector("audio"); // Lấy thẻ audio

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      
      // 1. Đặt nguồn nhạc
      audioEl.setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3?v=${cacheBuster}`);

      // 2. Thêm sự kiện để phát nhạc khi người dùng tương tác
      document.body.addEventListener('touchstart', function() {
            audioEl.play().catch(e => console.log("Lỗi phát nhạc:", e));
      }, {once: true}); // {once: true} đảm bảo sự kiện chỉ chạy 1 lần

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);