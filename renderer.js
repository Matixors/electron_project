const nodeCrypto = require('crypto');
const text_input = document.getElementById('text-input');
const md5_output = document.getElementById('md5-output');
const sha1_output = document.getElementById('sha1-output');
const sha256_output = document.getElementById('sha256-output');
const sha512_output = document.getElementById('sha512-output');

const changeText = () => {
  let text = text_input.value;
  const md5 = nodeCrypto.createHash('md5').update(text, 'utf8').digest('hex');
  md5_output.innerHTML = md5;

  const sha1 = nodeCrypto.createHash('sha1').update(text, 'utf8').digest('hex');
  sha1_output.innerHTML = sha1;

  const sha256 = nodeCrypto
    .createHash('sha256')
    .update(text, 'utf8')
    .digest('hex');
  sha256_output.innerHTML = sha256;

  const sha512 = nodeCrypto
    .createHash('sha512')
    .update(text, 'utf8')
    .digest('hex');
  sha512_output.innerHTML = sha512;
};

text_input.addEventListener('keydown', changeText);
