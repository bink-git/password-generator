const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passLeft = document.querySelector('.password-left');
let passRight = document.querySelector('.password-right');

let btn = document.querySelector('.btn');
let num = document.querySelector('input');

const numCheck = document.getElementById('numCheck');
const symCheck = document.getElementById('symCheck');

const circleNum = document.querySelector('.circle-num');
const tumblerNum = document.querySelector('.tumbler-num');

const circleSym = document.querySelector('.circle-sym');
const tumblerSym = document.querySelector('.tumbler-sym');

let setNum = false;
let setSym = false;

let input = document.querySelector('input');
const text = document.getElementById('text');

numCheck.addEventListener('click', () => {
  circleNum.classList.toggle('circle-active');
  circleNum.classList.toggle('circle');
  tumblerNum.classList.toggle('tumbler');
  tumblerNum.classList.toggle('tumbler-active');
  if (circleNum.classList.contains('circle-active')) {
    setNum = true;
  }
  if (circleNum.classList.contains('circle')) {
    setNum = false;
  }
});

symCheck.addEventListener('click', () => {
  circleSym.classList.toggle('circle-active');
  circleSym.classList.toggle('circle');
  tumblerSym.classList.toggle('tumbler');
  tumblerSym.classList.toggle('tumbler-active');
  if (circleSym.classList.contains('circle-active')) {
    setSym = true;
  }
  if (circleSym.classList.contains('circle')) {
    setSym = false;
  }
});

let passLehgth;
input.addEventListener('input', (e) => {
  passLength = e.target.value;
});

const passWithLetters = characters.slice(0, 52);

const passWithNumbers = characters.slice(0, 62);

function generate() {
  let pass1 = [];
  let pass2 = [];

  for (let i = 0; i < passLength; i++) {
    if (!setNum && !setSym) {
      pass1.push(
        passWithLetters[Math.floor(Math.random() * passWithLetters.length)]
      );
      pass2.push(
        passWithLetters[Math.floor(Math.random() * passWithLetters.length)]
      );
    } else if (setNum && !setSym) {
      pass1.push(
        passWithNumbers[Math.floor(Math.random() * passWithNumbers.length)]
      );
      pass2.push(
        passWithNumbers[Math.floor(Math.random() * passWithNumbers.length)]
      );
    } else if (setNum && setSym) {
      pass1.push(characters[Math.floor(Math.random() * characters.length)]);
      pass2.push(characters[Math.floor(Math.random() * characters.length)]);
    }
  }

  passLeft.textContent = pass1.join('');
  passRight.textContent = pass2.join('');
}

btn.addEventListener('click', generate);

passLeft.addEventListener('click', (e) => {
  const content = passLeft.textContent;
  navigator.clipboard.writeText(content);
});

passRight.addEventListener('click', (e) => {
  const content = passRight.textContent;
  navigator.clipboard.writeText(content);
});
