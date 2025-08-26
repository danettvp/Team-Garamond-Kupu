var step = 0;

document.getElementById('btn1').onclick = function() {
    if (step === 0) step = 1;
    else step = 0;
};

document.getElementById('btn2').onclick = function() {
    if (step === 1) step = 2;
    else step = 0;
};

document.getElementById('btn3').onclick = function() {
    if (step === 2) {
        alert('Correct! You spelled pātara!');
        step = 0;
    } else step = 0;
};

document.getElementById('btn4').onclick = function() {
    step = 0;
};
