function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });
}

const music = Happy-Birthday-Instrumental.mp3;

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
