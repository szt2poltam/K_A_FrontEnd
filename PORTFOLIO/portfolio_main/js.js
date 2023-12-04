window.addEventListener("load", () => {
    clock();
    function clock() {

      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();

      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;

      const time = hours + ":" + minute + " ";

      document.getElementById("time").innerHTML = time;
      setTimeout(clock, 1000);

      document.getElementById("time").style.fontSize = "15px";
      document.getElementById("time").style.color = "#ad6969";
      document.getElementById("time").style.fontWeight = "bold";
      document.getElementById("time").style.color = "black";
      console.log(time);
    }
  });


  