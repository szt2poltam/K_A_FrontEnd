//JELSZÓ VALIDÁCIÓ

function validate(){
    const nev = document.getElementById("nev").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const jelszo = document.getElementById("jelszo").value;

    
    if (nev == "" || nev == null || email == "" || email == null || date == "" || date == null || jelszo == "" || jelszo == null)
    {
        console.log("Üres mezők!")
        alert("Nem hagyhat üresen mezőket!")
    }
    else{
        //NÉV VERIFIKÁCIÓ
        if (!nev.match(/[a-zA-Záé]{2,}( [a-zA-Záé]{2,})+/))
        {
          console.log("Helytelen név!")
            alert("A megadott név helytelen! \nCsak kis-és nagy betűket tartalmazhat!");
          }

        else{
            // E-MAIL VERIFIKÁCIÓ
            if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
            {
              console.log("Helytelen e-mail!")
                alert("A megadott e-mail helytelen! \nA megfelelő forma: valaki@example.hu");
            }

            else{
                //DÁTUM VERIFIKÁCIÓ 
                if (!date.match(/^(\d{4})\.(\d{2})\.(\d{2})$/))
                {
                  console.log("Helytelen dátum!")
                    alert("A megadott dátum helytelen! \nA megfelelő forma: YYYY.MM.DD");
                }
                else{
                    //JELSZÓ VERIFIKÁCIÓ
                    if (jelszo.match("admin123")){
                        document.getElementById("login").style.display = "none";
                        document.getElementById("teszt1").style.display = "block";
                    }
                    else{
                        console.log("Helytelen jelszó!")
                        alert("Helytelen jelszót adott meg!")
                    }
                }
            }
        }
    }
}
var test1helyes = false;
var test2helyes = false;
var test3helyes = false;
var test4helyes = false;
var test5helyes = false;
var helyesek = 0;

function test1(){
  const q1 = document.querySelector('input[name="q1"]:checked').value;

  if (q1 === "prompt()"){
    test1helyes = true;
    console.log("Első teszt: " + test1helyes);
    console.log(q1);
    document.getElementById("teszt1").style.display = "none";
    document.getElementById("teszt2").style.display = "block";
    
  }
  else{
    document.getElementById("teszt1").style.display = "none";
    document.getElementById("teszt2").style.display = "block";
  }
}

function test2() {
  var checkedBoxes = document.querySelectorAll('input[name=q2]:checked');
  var checkedValues = [];
  for (var i = 0; i < checkedBoxes.length; i++) {
    checkedValues.push(checkedBoxes[i].value);
  }
  
  for (var j = 0; j < checkedValues.length; j++){
    console.log(checkedValues[j]);
  }

  if (checkedValues.includes('Java') && checkedValues.includes('JavaScript') && !checkedValues.includes('HTMLCSS') && !checkedValues.includes('Python')){
    test2helyes = true;
    console.log("Második teszt: " + test2helyes);
    document.getElementById("teszt2").style.display = "none";
    document.getElementById("teszt3").style.display = "block";
  }
  else{
    document.getElementById("teszt2").style.display = "none";
    document.getElementById("teszt3").style.display = "block";
  }
}

function test3(){
  var correct = "<br>"
  var tst = document.getElementById("q3").value;

  if (tst.toLowerCase() === correct){
    test3helyes = true;
    console.log("Harmadik teszt: " + test3helyes);
    console.log(tst);
    document.getElementById("teszt3").style.display = "none";
    document.getElementById("teszt4").style.display = "block";
  }
  else{
    console.log(tst);
    document.getElementById("teszt3").style.display = "none";
    document.getElementById("teszt4").style.display = "block";
  }
}

function test4(){
  var correct1 = "javascript";
  var correct2 = "html";
  var correct3 = "css";
  var ok = document.getElementById("q4").value;

  if (ok.toLowerCase().includes(correct1 && correct2 && correct3)){
    test4helyes = true;
    console.log("Negyedik teszt: " + test4helyes);
    console.log(ok);
    document.getElementById("teszt4").style.display = "none";
    document.getElementById("teszt5").style.display = "block";
  }
  else{
    console.log(ok);
    document.getElementById("teszt4").style.display = "none";
    document.getElementById("teszt5").style.display = "block";
  }
}

  

  function test5(){
    const correctAnswers = ['q1'];
    var valasztott = document.getElementById('q5').value;


    if (correctAnswers.includes(valasztott)){
      test5helyes = true;
      console.log("Ötödik teszt: " + test5helyes);
      console.log(valasztott);
      document.getElementById("teszt5").style.display = "none";
      document.getElementById("eredmeny").style.display = "block";
    }
    else {
      console.log(valasztott);
      document.getElementById("teszt5").style.display = "none";
      document.getElementById("eredmeny").style.display = "block";
    }
}

function corrects(){
  const eredmenyek = document.getElementById("eredmeny");

  if (test1helyes === true){
    helyesek++;
    console.log(helyesek);
  }
  if (test2helyes === true){
    helyesek++;
    console.log(helyesek);
  }
  if (test3helyes === true){
    helyesek++;
    console.log(helyesek);


    
  }
  if (test4helyes === true){
    helyesek++;
    console.log(helyesek);
  }
  if (test5helyes === true){
    helyesek++;
    console.log(helyesek);
  }

  eredmenyek.innerHTML = helyesek*100/5 + "% százalék a teszt eredménye.";

}




function back1(){
  document.getElementById("teszt2").style.display = "none";
  document.getElementById("teszt1").style.display = "block";
}

function back2(){
  document.getElementById("teszt3").style.display = "none";
  document.getElementById("teszt2").style.display = "block";
}

function back3(){
  document.getElementById("teszt4").style.display = "none";
  document.getElementById("teszt3").style.display = "block";
}

function back4(){
  document.getElementById("teszt5").style.display = "none";
  document.getElementById("teszt4").style.display = "block";
}











