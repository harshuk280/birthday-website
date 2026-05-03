function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}

const music = document.getElementById("bg-music");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

/* Optional Welcome Popup */
window.onload = function() {
  setTimeout(() => {
    alert("🎉 Happy Birthday Mansi ❤️\nWishing you happiness, success & endless smiles!");
  }, 1500);
};
