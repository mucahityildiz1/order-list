const urunler = document.querySelectorAll('.urunler li');
const siparisListesi = document.querySelector('#siparislerinListesi');

const siparis = [];

function siparisleriOlustur() {
  siparisListesi.innerHTML = "";
  for (const urun of siparis) {
    siparisListesi.innerHTML += `<li>${urun.name} x${urun.quantity}</li>`;
  }
}

function urunEkle() {
  const siparisName = this.innerText;
  const urun = siparis.find(x => x.name === siparisName);

  if (urun) {
    urun.quantity++;
  } else {
    siparis.push({
      name: siparisName,
      quantity: 1,
    });
  }
  siparisleriOlustur();
}

urunler.forEach(urun => urun.addEventListener('click', urunEkle));