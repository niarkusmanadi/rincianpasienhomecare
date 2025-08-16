document.addEventListener("DOMContentLoaded", function () {
  const selectJarak = document.querySelector('select[name="visite-dokter"]');
  const biayaVisite = document.getElementById("biaya-visitedokter");

  // Harga per kunjungan berdasarkan jarak
  const hargaPerKunjungan = {
    "0 - 4 km": 100000,
    "4,1 - 5 km": 110000,
    "5,1 - 6 km": 120000,
    "6,1 - 7 km": 130000,
    "7,1 - 8 km": 140000,
    "8,1 - 9 km": 150000,
    "9,1 - 10 km": 160000,
    "10,1 - 11 km": 170000
  };

  // Hitung total biaya untuk paket 3 kali kunjungan
  selectJarak.addEventListener("change", function () {
    const jarakDipilih = selectJarak.value;
    if (hargaPerKunjungan[jarakDipilih]) {
      const total = hargaPerKunjungan[jarakDipilih] * 3;
      biayaVisite.textContent = total.toLocaleString("id-ID");
    } else {
      biayaVisite.textContent = "0";
    }
  });
});