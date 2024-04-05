// MAd lib with javascript by Mr.V

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

// Event function
function buildMadLib() {
  // Input
  let pluralNoun = document.getElementById("Plural-Noun").value;
  let adjective = document.getElementById("Adjective").value;
  let verb = document.getElementById("Verb").value;
  let noun = document.getElementById("Noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  // Process
  let result =
    '" There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane! ", I screamed. " Somebody has to ' +
    verb +
    " on the " +
    noun +
    ' to solve this problem lets go to "' +
    city +
    " and get help from " +
    name +
    " Right now ";
  //    output
  document.getElementById("result").innerHTML = result;
}

// Event Listener
document.getElementById("mdb").addEventListener("click", buildMadLibtwo);

// Event function
function buildMadLibtwo() {
  let pluralNoun = document.getElementById("Plural-Noun").value;
  let adjective = document.getElementById("Adjective").value;
  let verb = document.getElementById("Verb").value;
  let noun = document.getElementById("Noun").value;
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  // Process
  let result =
    '" There is not many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' We need to get more! " ' +
    verb +
    " on the " +
    noun +
    ' or a less its going to be boring. " and we might have to go ' +
    city +
    " to have more fun with" +
    name +
    " Right now ";

  // Output
  document.getElementById("result").innerHTML = result;
}
