function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.1) + "em";
    


 console.log("font size")

}
function applyt(x) {

document.getElementById("styles").href=x.id+".css";

}

function justify() {

    document.body.style.textAlign="justify";
    
    }

    function unjustify() {

        document.body.style.textAlign="left";
        
        }

        