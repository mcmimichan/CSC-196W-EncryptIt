/*
 * Starter file 
 */
(function() {
  "use strict";
    

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const btn = document.getElementById("encrypt-it");
    btn.addEventListener('click', handleClick);

    const btn2 = document.getElementById("reset");
    btn2.addEventListener('click', handleReset);

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleClick() {
    console.log("Button clicked!");
    let txt = document.getElementById("input-text").value;

    let cipheredText = cipherify(txt);    
    setSize();
    let finalText = setCaps(cipheredText);

    document.getElementById("result").innerHTML = finalText;
  }

  function handleReset() {
    console.log("Resetting...");
    //     
  }

  function cipherify(text){
    var cipherSelector = document.getElementById("cipher-type");
    var cipherType = cipherSelector.value;

    if (cipherType == "shift")
      shiftCipher(text);
    else if (cipherType == "random")
      randomCipher(text);
    
    return text;
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function randomCipher(text) {
    
    
    return "oops" + text;
  }

  function setSize() {
    const rbs = document.querySelectorAll('input[name="text-size"]');
    for (let rb of rbs) {
      if (rb.checked) {
        let selected = rb.value;

        if (selected == "12pt") {
          document.getElementById("result").style.fontSize = "12pt";
        } else if (selected == "24pt") {
          document.getElementById("result").style.fontSize = "24pt";
        }
      }
    }    
  }

  function setCaps(text) {
    return "triple oops" + text;
  }
  

  /******* from Fancify *******

  // Bigger! button: increase font size to 24pt
  const btn = document.querySelector('button[name="bigger"]');

  function upSize(event) {
      document.getElementById("txt").style.fontSize= "4em";
  }

  btn.addEventListener('click', upSize);

  // radio buttons: add/remove styles
  function fancyOrNot(event) {
    const rbs = document.querySelectorAll('input[name="js-style"]');
    for (let rb of rbs) {
        if (rb.checked) {
            let selected = rb.value;
                        
            if (selected == "fancy") {
                document.getElementById("txt").style.fontWeight="bold";
                document.getElementById("txt").style.color="blue";
                document.getElementById("txt").style.textDecoration="underline";
            } else if (selected == "boring") {
                document.getElementById("txt").style.fontWeight="normal";
                document.getElementById("txt").style.color="black";
                document.getElementById("txt").style.textDecoration="initial";
            }
        }
    }
  }

  rb.addEventListener('change', fancyOrNot); */

})();
