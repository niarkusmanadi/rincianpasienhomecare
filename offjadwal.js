// ...existing code...

// Mapping harga berdasarkan jarak
const hargaJarakOffjadwal = {
    "0 - 1 km": 18500,
    "1,1 - 2 km": 20500,
    "2,1 - 3 km": 22500,
    "3,1 - 4 km": 25000,
    "4,1 - 5 km": 37500,
    "5,1 - 6 km": 42500,
    "6,1 - 7 km": 47500,
    "8,1 - 9 km": 52500
};



// Saat select jarak berubah, update harga transport perawat
document.querySelector('select[name="jarak-pasien"]').addEventListener('change', function() {
    let harga = hargaJarak[this.value] || 0;
    document.getElementById('btransportperawat-offjadwal').textContent = harga.toLocaleString("id-ID");
    // Hitung ulang total transport jika qty sudah diisi
    let qty = parseInt(document.getElementById('qty-transportperawat-offjadwal').value) || 0;
    document.getElementById('total-biayatransportperawat').textContent = (qty * harga).toLocaleString("id-ID");
});

// Saat qty transport perawat berubah, hitung totalnya
document.getElementById('qty-transportperawat-offjadwal').addEventListener('input', function() {
    let hargaText = document.getElementById('btransportperawat-offjadwal').textContent;
    let harga = parseInt(hargaText.replace(/\./g, "")) || 0; // hapus semua titik
    let qty = parseInt(this.value) || 0;
    document.getElementById('total-biayatransportperawat-offjadwal').textContent = (qty * harga).toLocaleString("id-ID");
});
// ...existing code...