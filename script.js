function partOne() {

  document.getElementById("story-space").innerHTML = "<div><p>Would you like to eat a CHICKEN or <br> an EGG?</p><pType your answer: <form><input type='text' name='box1' id='box1' oninput='partTwo()'></form></p></div>"

}
function partTwo() {

  var choiceOne = document.getElementById('box1');

  if (choiceOne.value == 'CHICKEN') {
    document.getElementById('story-space').innerHTML = "<div><p>What a horrible person. How dare <br> you?</p><p>Do you feel gulity (YES or NO)?</p><p><form><input name='box2' id='box2' type='text' oninput='partThree()'></form></p></div>"

    console.log("The poor chicken.");
  }
  else if (choiceOne.value == 'EGG') {
    document.getElementById('story-space').innerHTML = "<div><p>Ah, so  you're a baby eater.</p><p>Do you feel guilty (YES or NO)?</p><p><form><input name='box2' id='box2' type='text' oninput='partThree()'></form></p></div>"

    console.log("That egg had a bright future, and then you were born.");
  }

  else {
    console.log("Waiting....");
  }

}

function partThree() {

  var choiceTwo = document.getElementById('box2');


  if (choiceTwo.value == 'YES') {
    document.getElementById('story-space').innerHTML = "<div><p>Well, it's too late now.</p><span>DEPRESSION SESSION <br> SUCCESSFUL.</span>"

    console.log("You must be depressed. You're welcome.");
  }

  else if (choiceTwo.value == 'NO') {
    document.getElementById('story-space').innerHTML = "<div><p>I can't believe you, senseless human. Chickens have feelings, unlike you. Feeling guilty now (YES or NO)?</p><p><form><input name='box3' id='box3' type='text' oninput='partFour()'></form></p></div>"

    console.log('Heartless. Just heartless.');

  }

  else {
    console.log("Waiting....");
  }
}

function partFour() {

  var choiceThree = document.getElementById('box3');

  if (choiceThree.value == 'YES') {
    document.getElementById('story-space').innerHTML = "<div><p>You're a horrible person, but at least <br> you now know.</p><span>DEPRESSION SESSION <br> SUCCESSFUL.</span></div>"

    console.log("Hahahaha...");
  }

  else if (choiceThree.value == 'NO') {
    document.getElementById('story-space').innerHTML = "<div><p>Arguing with you is like <br> administering <br> medicine to the dead.</p><span>DEPRESSION SESSION <br> FAILED.</span></div>"

    console.log('Enjoy the rest of your guilt-full life.');

  }

  else {
    console.log("Waiting....");
  }
}
