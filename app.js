const generateBtn = document.querySelector('#pbtn');
const passwordFeild = document.querySelector('#password');
const copyIcon = document.querySelector('#copyIcon');
const error = document.querySelector('.abs');
const password =
  '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwordLength = 14;

generateBtn.addEventListener('click', () => {
  createPassword();
});

function createPassword() {
  let newP = '';
  for (let i = 0; i < passwordLength; i++) {
    newP += password[Math.floor(Math.random() * password.length)];
  }
  passwordFeild.value = newP;
}

copyIcon.addEventListener('click', () => {
  if (passwordFeild.value === '') {
    error.textContent = 'Cannot Copy an empty password';
    error.classList.add('see');
    setTimeout(() => {
      error.classList.remove('see');
    }, 2000);
  } else {
    error.innerHTML = `<p>copied</p>
      <i class="ri-check-line" id="right"></i>`;
    copied();
    error.classList.add('see');
    setTimeout(() => {
      error.classList.remove('see');
    }, 2000);
  }
});

function copied() {
  passwordFeild.select();
  passwordFeild.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordFeild.value);
}
