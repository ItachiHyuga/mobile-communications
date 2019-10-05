
console.log("connected")
/* Table of contents */
document.getElementById("treeview").style.display = "none"

document.getElementById("contents").onclick = function () {
    contents()
};

function contents() {
    if (document.getElementById("treeview").style.display == "none") {
        document.getElementById("treeview").style.display = "block";

        document.getElementById("main").style = "grid-template-columns: 20% auto 25%;";
        console.log("clicked 1");
    } else {
        console.log("clicked 1");
        document.getElementById("treeview").style.display = "none";

        document.getElementById("main").style = "grid-template-columns: 40px auto 25%;";

    }


}

//close note taker
//maximize wikipedia
document.getElementById("contents").onclick = function () {
    contents()
};
document.getElementById("contents").onclick = function () {
    contents()
};


//close wikipedia
//maximize note taker
document.getElementById("contents").onclick = function () {
    contents()
};
document.getElementById("contents").onclick = function () {
    contents()
};

