const matrix = document.querySelector('.matrix');

function makeId() {
    let result = '';

    let characters = 'ABCDEFGKIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789=+-;:/?,.!@#$%&*ぁあぃいぅう㍿㍐ヺヸヰミマポボ';

    result += characters.charAt(Math.floor(Math.random() * characters.length));

    return result;
}

function generateText () {
    const w = 20;
    const h = 20;

    for (let index = 0; index < w; index++) {
        const timeout = Math.floor(Math.random() * 10) * 1000;

        let delay = 0;
        
        const colunm = document.createElement('p');

        for (let index = 0; index < h; index++) {
            const letter = document.createElement('span');

            letter.innerHTML = makeId();

            colunm.appendChild(letter);

            delay += 100;

            colunm.children[index].style.animationDelay = delay + 'ms';
            
        }

        setTimeout(() => {
            matrix.appendChild(colunm);
        }, timeout);
    }
}

generateText();