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
    let finalText = setCaps(cipheredText);
    setSize();

    document.getElementById("result").innerHTML = finalText;
  }

  function handleReset() {
    console.log("Resetting...");

    /*** TO DO: ***/
    // clear input and result fields
    // deselect checkbox
    // reselect 12pt radio button
    // reset cipher type to Shift

  }

  function cipherify(text){
    text = text.toLowerCase();

    var cipherType = document.getElementById("cipher-type").value;
    let result = "";
    
    if (cipherType == "shift")
      result = shiftCipher(text);
    else if (cipherType == "random")
      result = "View source for pseudocode randomizing \'" + randomCipher(text) + "\'";
    
    return result;
  }

  function shiftCipher(text) {
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
    let result = text;

    /*** RANDOM CIPHER PSEUDOCODE ***
     * 
     * let alphabet = "abcdefghijklmnopqrstuvwxyz";
     * let scrambledAlphabet = scramble(alphabet);
     * let result = "";
     * let resultChar = "";
     * 
     * for (let i = 0; i < text.length; i++) {
     *   let originalChar = text.charAt(i);
     * 
     *   if (alphabet.includes(originalChar))
     *     resultChar = scrambledAlphabet.charAt(i);
     *   else
     *     resultChar = originalChar;
     * 
     *   result += resultChar;
     * }
     * 
     */

    return result;
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
    var capsBox = document.getElementById("all-caps");

    if (capsBox.checked)
      text = text.toUpperCase();
    
    return text;
  }

})();
