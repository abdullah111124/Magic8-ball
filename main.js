// Functionize Minecraft Fishing Star Code

//HTML variable 7 days of working

document.getElementById("abcd").addEventListener("click", btnClicked);

function btnClicked() {
  let question = document.getElementById("abc").value.toLowerCase();
  console.log(question);

  if (question === "does a magic 8 ball actually work") {
    document.getElementById("output").innerHTML = "how dare you doubt me";
  } else if (question === "is java script awesome") {
    document.getElementById("output").innerHTML = "of course";
  } else if (question === "") {
    document.getElementById("output").innerHTML = "";
  } else {
    // random
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.2) {
      document.getElementById("output").innerHTML = "Outlook not so good";
    } else if (randNum < 0.4) {
      document.getElementById("output").innerHTML = "Dont count on it";
    } else if (randNum < 0.6) {
      document.getElementById("output").innerHTML =
        "Concentrate and ask again ";
    } else if (randNum < 0.8) {
      document.getElementById("output").innerHTML = "As i see it yes";
    } else {
      document.getElementById("output").innerHTML = "Without a doubt";
    }
  }
}
