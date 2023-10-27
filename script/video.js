const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");

video1.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement === video1) {
    video1.style.objectFit = "contain";
  } else {
    video1.style.objectFit = "cover";
  }
});

video2.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement === video2) {
    video2.style.objectFit = "contain";
  } else {
    video2.style.objectFit = "cover";
  }
});

video3.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement === video3) {
    video3.style.objectFit = "contain";
  } else {
    video3.style.objectFit = "cover";
  }
});

video4.addEventListener("fullscreenchange", function () {
  if (document.fullscreenElement === video4) {
    video4.style.objectFit = "contain";
  } else {
    video4.style.objectFit = "cover";
  }
});
