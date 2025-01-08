document.addEventListener('DOMContentLoaded', () => {
    const square = document.getElementById('square');

    square.addEventListener('click', () => {
        if(square.style.borderRadius === '50%') {
            square.style.borderRadius = '0';
        }else{
            square.style.borderRadius = '50%';
        }
        
    });
});