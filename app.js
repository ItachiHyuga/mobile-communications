

document.body.style.fontSize=localStorage.getItem('fontsize')

document.body.style.textAlign=localStorage.getItem('justification')

document.getElementById("styles").href="themes/"+localStorage.getItem('theme')+".css"
//fontsize
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  fz=parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em"
  document.body.style.fontSize = fz;
  localStorage.setItem("fontsize",fz);



  console.log("font size "+localStorage.getItem('fontsize'));

}


//theme
function applyt(x) {

  document.getElementById("styles").href = "themes/"+x.id + ".css";
  localStorage.setItem("theme",x.id);

}

//justify
function justify() {

  document.body.style.textAlign = "justify";
  localStorage.setItem("justification","justify");

}

function unjustify() {

  document.body.style.textAlign = "left";
  localStorage.setItem("justification","left");

}

function restoredefaults() {

  
document.body.style.fontSize="1.0em";

localStorage.setItem('fontsize',"1.0em");

document.body.style.textAlign="left";

localStorage.setItem('justification','left');

document.getElementById("styles").href="null.css"

localStorage.setItem('theme',"none");


}


if (typeof (Storage) != "undefined") {

} else {
  alert("Settings can't be saved. Please update the app.")
}

  