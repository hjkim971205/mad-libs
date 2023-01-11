// UI Logic

function getAndSetValues() {
    const nameInput = document.getElementById("nameInput").value;
  
    document.querySelector("span#name1a").innerText = nameInput;
    document.querySelector("span#name1b").innerText = nameInput;
    document.querySelector("span#name1c").innerText = nameInput;document.querySelector("span#name1d").innerText = nameInput;
    document.querySelector("span#name1e").innerText = nameInput;document.querySelector("span#name1f").innerText = nameInput;document.querySelector("span#name1g").innerText = nameInput;
  }
  
  // this function creates the onsubmit event handler
  // it needs to be called in the window.onload event handler
  function setFormSubmissionEventHandler() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
      getAndSetValues();
      document.querySelector("div#letter").removeAttribute("class");
    }
  }
  
  window.onload = function() {
    // inside of the window.onload handler function we only include
    // the code that we want to run when
    // the webpage has finished loading all resources
    setFormSubmissionEventHandler();
  };