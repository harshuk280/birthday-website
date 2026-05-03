function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}

const music = document.getElementById("bg-music");

/* Music button toggle */
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* Auto play after first user interaction (browser-friendly) */
document.body.addEventListener("click", function () {
  music.play().catch(function(error) {
    console.log("Autoplay blocked until user interaction:", error);
  });
}, { once: true });

/* Welcome birthday popup */
window.onload = function() {
  setTimeout(() => {
    alert("🎉 Happy Birthday Mansi ❤️\nWishing you endless happiness, success, love & beautiful memories!");
  }, 1200);
};

/* Optional sparkle effect on mouse move */
document.addEventListener("mousemove", function(e) {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.fontSize = "14px";
  sparkle.style.animation = "fadeOut 1s forwards";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

/* Sparkle fade animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(1.8);
  }
}
`;
document.head.appendChild(style);
