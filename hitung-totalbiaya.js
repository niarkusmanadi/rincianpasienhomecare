document.addEventListener("DOMContentLoaded", function () {
    const hargaTetap = {
        "qty-infus": 25000,
        "qty-surflo": 27500,
        "qty-spuit": 5000,
        "qty-pasang-infus": 50000,
        "qty-lepas-infus": 10000,
        "qty-terapi-dokter": 80000,
        "qty-cairan-NS": 25000,
        "qty-cairan-asering": 50000,
        "qty-cairan-paracetamol": 70000,
        "qty-cairan-paracetamol2": 50000,
        "qty-cairan-metronidazole": 60000,
        "qty-cairan-rl": 50000,
        "jasakeperawatan": 85000,
        "administrasi": 50000
    };

    // Fungsi update total setiap item
    function updateTotals() {
        let totalKeseluruhan = 0;

        // Hitung item yang punya harga tetap
        for (let id in hargaTetap) {
            const qty = parseInt(document.getElementById(id)?.value) || 0;
            const total = qty * hargaTetap[id];
            const totalSpan = document.getElementById("total-" + id.replace("qty-", ""));
            if (totalSpan) totalSpan.textContent = total.toLocaleString();
            totalKeseluruhan += total;
        }

        // Hitung item dinamis (Jasa Jasa)
        document.querySelectorAll(".jasajasa").forEach(row => {
            const harga = parseInt(row.querySelector(".mcm-jasajasa").selectedOptions[0].dataset.harga) || 0;
            const qty = parseInt(row.querySelector(".qty-jasajasa").value) || 0;
            const total = harga * qty;
            row.querySelector(".harga-jasajasa").textContent = harga.toLocaleString();
            row.querySelector(".total-jasajasa").textContent = total.toLocaleString();
            totalKeseluruhan += total;
        });

        // Hitung item dinamis (Injeksi)
        document.querySelectorAll(".injeksi").forEach(row => {
            const harga = parseInt(row.querySelector(".mcm-injeksi").selectedOptions[0].dataset.harga) || 0;
            const qty = parseInt(row.querySelector(".qty-injeksi").value) || 0;
            const total = harga * qty;
            row.querySelector(".harga-injeksi").textContent = harga.toLocaleString();
            row.querySelector(".total-injeksi").textContent = total.toLocaleString();
            totalKeseluruhan += total;
        });

        // Tambahkan total obat
        totalKeseluruhan += parseInt(document.getElementById("total_obat_perawatan").value) || 0;
        totalKeseluruhan += parseInt(document.getElementById("total_obat_bawapulang").value) || 0;

        // Update total keseluruhan
        document.getElementById("total-biaya").textContent = totalKeseluruhan.toLocaleString();
    }

    // Event listener untuk semua input dan select
    document.addEventListener("input", updateTotals);
    document.addEventListener("change", updateTotals);

    // Tombol hapus item
    window.hapusItem = function (btn) {
        const parent = btn.closest(".item");
        if (parent) parent.remove();
        updateTotals();
    };

    // Tombol tambah injeksi
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("tambah-injeksi")) {
            const injeksiContainer = document.getElementById("injeksi-container");
            const clone = e.target.closest(".injeksi").cloneNode(true);
            clone.querySelector(".qty-injeksi").value = 1;
            injeksiContainer.appendChild(clone);
            updateTotals();
        }
    });

    // Tombol hapus injeksi
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("hapus-item")) {
            e.target.closest(".injeksi").remove();
            updateTotals();
        }
    });

    // Jalankan sekali saat load
    updateTotals();
});