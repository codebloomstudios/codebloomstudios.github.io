let launchDate = "Nov 14 2023 00:00:00 GMT+0530";

if (new Date() < new Date(launchDate)) {
    console.log("not released yet");
    window.location.href = './comingSoon/comingSoon.html';
}
else {
    // const emptyDiv = document.getElementById("bodyContent");
    // emptyDiv.remove();
    // const emptyJs = document.getElementById("bodyJs");
    // emptyJs.remove();
    console.log("website RELEASED");
}

document.export = {launchDate}