const correctSequence = ['Pā', 'ta', 'ra'];
let step = 0;

const feedback = document.getElementById('feedback');

document.querySelectorAll('.syllable').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === correctSequence[step]) {
      button.classList.add('selected');
      step++;
      feedback.textContent = '';
      feedback.className = 'feedback';
      if (step === correctSequence.length) {
        feedback.textContent = 'Correct! You spelled Pātara!';
        feedback.className = 'feedback success';
        step = 0;
        document.querySelectorAll('.syllable').forEach(btn => btn.classList.remove('selected'));
      }
    } else {
      feedback.textContent = 'Try again!';
      feedback.className = 'feedback error';
      step = 0;
      document.querySelectorAll('.syllable').forEach(btn => btn.classList.remove('selected'));
    }
  });
});
