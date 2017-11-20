function Display() {
    var idName = document.getElementsByTagName("form");
    if (idName[0].id === "showHome") {
        var formObj = document.getElementById("showHome");
        if (formObj.style.display === "none" || formObj.style.display === "") {
            formObj.style.display = "block";        
        }
    } else if (idName[0].id == "showForm")
    {
        var formObj = document.getElementById("showForm");
        if (formObj.style.display === "none" || formObj.style.display === "") {
            formObj.style.display = "block";
        }
    }
    //var mobileName = document.getElementById("txtMobileName").
}

function redirect() {
    window.location.hash = "#Form1.html";
}