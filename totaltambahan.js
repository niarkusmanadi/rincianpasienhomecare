
function hitungTotalTambahan() {
    let total = 0;

    // Biaya transport perawat
    let qtyTransport = parseInt(document.getElementById('qty-transportperawat').value) || 0;
    let hargaTransport = parseInt(document.getElementById('btransportperawat').textContent.replace(/\D/g, '')) || 0;
    let totalTransport = qtyTransport * hargaTransport;
    document.getElementById('total-biayatransportperawat').textContent = totalTransport.toLocaleString();
    total += totalTransport;

    // Off Jadwal
    let qtyOff = parseInt(document.getElementById('qty-transportperawat-offjadwal').value) || 0;
    let hargaOff = parseInt(document.getElementById('btransportperawat-offjadwal').textContent.replace(/\D/g, '')) || 0;
    let totalOff = qtyOff * hargaOff;
    document.getElementById('total-biayatransportperawat-offjadwal').textContent = totalOff.toLocaleString();
    total += totalOff;

    // Visite Dokter
    let biayaVisite = parseInt(document.getElementById('biaya-visitedokter').textContent.replace(/\D/g, '')) || 0;
    total += biayaVisite;

    // Alat dan Bahan
    document.querySelectorAll('#alatbahan-container .total-alatbahan').forEach(el => {
        total += parseInt(el.textContent.replace(/\D/g, '')) || 0;
    });

    // Obat Oral dan Salep
    document.querySelectorAll('#obatoralsalep-container .total-obatoralsalep').forEach(el => {
        total += parseInt(el.textContent.replace(/\D/g, '')) || 0;
    });

    // Jasa Jasa
    document.querySelectorAll('#jasajasa-container .total-jasajasa').forEach(el => {
        total += parseInt(el.textContent.replace(/\D/g, '')) || 0;
    });

    // Tampilkan total keseluruhan
    document.getElementById('total-biaya-tambahan').textContent = total.toLocaleString();
}

// Event listener supaya otomatis menghitung kalau ada perubahan input
document.addEventListener('input', hitungTotalTambahan);
document.addEventListener('change', hitungTotalTambahan);

