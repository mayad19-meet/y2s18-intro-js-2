
var pictures = ["./imgs/dog.jpg", "./imgs/mrkrab.png", "./imgs/Patrick_Star.png", "./imgs/spongebob_feat.jpg", "./imgs/Squee.png"];
var currentIndex = 0;
document.getElementsByTagName("img")[0].addEventListener("click", function(event) {
showNextPicture();
});
showNextPicture();
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }

 
else if (currentIndex<pictures.length){
var pic1=document.getElementsByTagName("img")[0];
pic1.src=pictures[currentIndex];
}
}
