let randomHex = '#';
const hexCharacters = '0123456789ABCDEF';

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexCharacters.length);
    randomHex += hexCharacters.charAt(randomIndex);
}

console.log(randomHex);
