let launchDate = "Nov 10 2023";

if (new Date() < new Date(launchDate)) {
    console.log("not released yet");
    window.location.href = './comingSoon.html';
}
else {
    console.log("website RELEASED");
}