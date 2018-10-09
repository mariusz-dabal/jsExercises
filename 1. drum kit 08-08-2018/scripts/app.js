
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[value="${e.keyCode}"]`);
  const drum = document.querySelector(`.drum[value="${e.keyCode}"]`);
  if(!audio) return; //stop program if there is no audio element
  audio.currentTime = 0; //rewind to the start
  audio.play();
  drum.classList.add('play');
});

const drums = document.querySelectorAll('.drum');
drums.forEach(drum => drum.addEventListener('transitionend', (e) => {
  if(e.propertyName != 'transform') return; // skip if it is not transform
  drum.classList.remove('play');
}));
