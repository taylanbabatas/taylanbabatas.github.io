const sifreInput = document.querySelector('input');
const icerik = document.querySelector('#icerik');
sifreInput.addEventListener('input', () => {
  const sifre = sifreInput.value;
  if (sifre.length < 5) {
    icerik.innerHTML = 'Şifre Yetersiz';
  } else if (sifre.includes('.')) {
    icerik.innerHTML = 'Çok Güçlü Şifre';
  } else {
    icerik.innerHTML = 'Şifre kabul edildi.';
  }
});
