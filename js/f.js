var i = 0;
var txt = `Hey there! Welcome to my portfolio`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

let typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
  }
  setTimeout(typeWriter, speed);
}
typeWriter()