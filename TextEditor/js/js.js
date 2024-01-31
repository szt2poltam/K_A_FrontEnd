const welcomewrapper = document.querySelector(".welcome-contain-wrapper");
const containwrapper = document.querySelector(".text-editor-container");

function JumpToMainPage() {

    welcomewrapper.style.transition = "opacity 1.5s ease-in-out";
    containwrapper.style.transition = "opacity 1.5s ease-in-out";

    welcomewrapper.style.opacity = 0;
    containwrapper.style.opacity = 1;

    setTimeout(() => {
        const loader = document.createElement("div");
        loader.className = "loader";
        document.body.appendChild(loader);
    }, 500);

    setTimeout(() => {
        document.body.removeChild(document.querySelector(".loader"));
        welcomewrapper.style.display = "none";
        containwrapper.style.display = "flex";
    }, 2500); 
}

function SaveText() {

    if (!SaveText.isEventAttached) {
      document.getElementById('saveButton').addEventListener('click', SaveText);
      SaveText.isEventAttached = true;
    }
  
    const textToSave = document.getElementById('textEditor').innerText;
    const blob = new Blob([textToSave], { type: 'text/plain' });
    const link = document.createElement('a');
  
    link.download = 'textFile.txt';
    link.href = window.URL.createObjectURL(blob);
    link.click();
  
    document.body.appendChild(link);
    document.body.removeChild(link);
  
    alert('Text saved successfully!');
  }
  
  function ImportFile() {
    if (!ImportFile.isEventAttached) {
      document.getElementById('importButton').addEventListener('click', ImportFile);
      ImportFile.isEventAttached = true;
    }
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.addEventListener('change', handleFileSelect);
  
    fileInput.click();
  
    function handleFileSelect(event) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = function (e) {
          alert('Text imported successfully!');
          document.getElementById('textEditor').innerText = e.target.result;
        };
  
         reader.readAsText(file);
        }
    }
}



