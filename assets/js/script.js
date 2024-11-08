const urunler = ["elma", "armut", "kavun", "portakal", "karpuz", "uzum"];

const siparisler = [];


function init() {
  for (const urun of urunler) {
    urunlerinListesi.innerHTML +=
      `
      <li class="urun">
        <button class="urunBtn">${urun}</button>
      </li>
      `;
  }
  bindBtns();
}
function bindBtns() {
  const urunBtns = document.querySelectorAll(".urunBtn");
  for (const btn of urunBtns) {
    btn.addEventListener("click", sepeteEkle);
  }
}


function sepeteEkle() {
  const meyveAdi = this.innerText;
  const varsaMeyveninIndexi = siparisler.findIndex(siparis => siparis.meyveAdi === meyveAdi);

  if (varsaMeyveninIndexi > -1) {
    siparisler[varsaMeyveninIndexi].adet += 1;
  } else {
    siparisler.push({ meyveAdi, adet: 1 });
  }
  
  siparisleriYazdir();
}

function siparisleriYazdir() {
  siparislerinListesi.innerHTML = "";  

  for (const siparis of siparisler) {
    siparislerinListesi.innerHTML +=
      `
      <li>${siparis.meyveAdi} x ${siparis.adet}</li>
      `;
  }
}

init();