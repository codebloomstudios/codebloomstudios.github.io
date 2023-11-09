let launchDate = "Nov 14 2023 00:00:00 GMT+0530";

if (new Date() < new Date(launchDate)) {
    console.log("not released yet");
    window.location.href = './comingSoon/comingSoon.html';
}
else {
    console.log("website RELEASED");
}

document.export = {launchDate}