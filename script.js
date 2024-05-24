const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

audioStart = new Audio('./soung/audio_theme.mp3')
audioStart.play()
    
    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 610);
    }

    const loop = setInterval(() => {

        console.log('loop')

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        console.log(marioPosition);
        
        if (pipePosition <= 120 && pipePosition> 0 && marioPosition < 70) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/NatHoo.png';
            mario.style.width = '70px'
            mario.style.marginLeft = '60px'

            clearInterval(loop);
        }

    }, 10);

document.addEventListener('keydown', jump);

document.getElementById('botao-pular').addEventListener('click', jump);