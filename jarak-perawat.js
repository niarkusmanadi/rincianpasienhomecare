const hargaJarak = {
    "0 - 1 km": 185000,
    "1,1 - 2 km": 20500,
    "2,1 - 3 km": 22500,
    "3,1 - 4 km": 25000,
    "4,1 - 5 km": 37500,
    "5,1 - 6 km": 42500,
    "6,1 - 7 km": 47500,
    "8,1 - 9 km": 52500
};

function hitungTotal(qtyId, hargaId, totalId) {
    // Ambil harga mentah dari dataset, pastikan dalam bentuk Number
    let hargaEl = document.getElementById(hargaId);
    let harga = Number(hargaEl?.dataset.rawHarga ?? 0);

    // Ambil qty dari input, pastikan dalam bentuk Number
    let qtyEl = document.getElementById(qtyId);
    let qty = Number(qtyEl?.value ?? 0);

    // Hitung total
    let total = qty * harga;

    // Tampilkan total dengan format ribuan Indonesia
    document.getElementById(totalId).textContent = total.toLocaleString("id-ID");
}


// ====== Event: pilih jarak ======
document.querySelector('select[name="jarak-pasien"]').addEventListener('change', function () {
    let jarak = this.value;
    let harga = hargaJarak[jarak] || 0;

    // Perawat
    let bPerawat = document.getElementById('btransportperawat');
    bPerawat.dataset.rawHarga = harga; // simpan mentah
    bPerawat.textContent = harga.toLocaleString("id-ID");
    hitungTotal("qty-transportperawat", "btransportperawat", "total-biayatransportperawat");

    // Offjadwal
    let bOff = document.getElementById('btransportperawat-offjadwal');
    bOff.dataset.rawHarga = harga; // simpan mentah
    bOff.textContent = harga.toLocaleString("id-ID");
    hitungTotal("qty-transportperawat-offjadwal", "btransportperawat-offjadwal", "total-biayatransportperawat-offjadwal");
});

// ====== Event: qty berubah ======
document.getElementById('qty-transportperawat').addEventListener('input', function () {
    hitungTotal("qty-transportperawat", "btransportperawat", "total-biayatransportperawat");
});

document.getElementById('qty-transportperawat-offjadwal').addEventListener('input', function () {
    hitungTotal("qty-transportperawat-offjadwal", "btransportperawat-offjadwal", "total-biayatransportperawat-offjadwal");
});
