




  @param {string} lightboxID


function unhideLightbox(lightboxID) {
  document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
  unhideLightbox("aquarius")
}
document.getElementById("picture-1").onclick = unhideLightbox1;

function unhideLightbox2() {
  unhideLightbox("pisces")
}
document.getElementById("picture-2").onclick = unhideLightbox2;

function unhideLightbox3() {
  unhideLightbox("aries")
}
document.getElementById("picture-3").onclick = unhideLightbox3;
