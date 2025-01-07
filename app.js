const generateBtn = document.querySelector('#pbtn');
const passwordFeild = document.querySelector('#password');
const copyIcon = document.querySelector('#copyIcon');
const password =
  '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwordLength = 14;

generateBtn.addEventListener('click', () => {
  createPassword();
});

copyIcon.addEventListener('click', () => {
  copied();
});

function createPassword() {
  let newP = '';
  for (let i = 0; i < passwordLength; i++) {
    newP += password[Math.floor(Math.random() * password.length)];
  }
  passwordFeild.value = newP;
}

function copied() {
  passwordFeild.select();
  passwordFeild.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordFeild.value);
}
