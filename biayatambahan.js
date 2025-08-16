document.addEventListener("DOMContentLoaded", function () {

    function updateTotals() {
        let grandTotal = 0;

        // Untuk setiap kategori
        document.querySelectorAll(".alatbahan, .obatoralsalep, .jasajasa").forEach(item => {
            let select = item.querySelector("select");
            let harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
            let qty = parseInt(item.querySelector("input[type='number']").value) || 0;
            let total = harga * qty;

            // Update harga dan total di UI
            let hargaSpan = item.querySelector(".harga-alatbahan, .harga-obatoralsalep, .harga-jasajasa");
            if (hargaSpan) hargaSpan.textContent = harga.toLocaleString();

            let totalSpan = item.querySelector(".total-alatbahan, .total-obatoralsalep, .total-jasajasa");
            if (totalSpan) totalSpan.textContent = total.toLocaleString();

            grandTotal += total;
        });

        // Update total akhir
        document.getElementById("total-biaya-akhir").textContent = grandTotal.toLocaleString();
    }

    // Event listener untuk perubahan qty atau select
    document.addEventListener("input", function (e) {
        if (e.target.matches("select, input[type='number']")) {
            updateTotals();
        }
    });

    // Fungsi clone item
    function cloneItem(button, selector) {
        let container = button.closest(selector + "-container");
        let firstItem = container.querySelector(selector);
        let newItem = firstItem.cloneNode(true);

        // Reset qty ke 1 dan harga ke default
        newItem.querySelector("input[type='number']").value = 1;
        updateTotals();
        container.appendChild(newItem);
    }

    // Fungsi hapus item
    function removeItem(button, selector) {
        let container = button.closest(selector + "-container");
        let items = container.querySelectorAll(selector);
        if (items.length > 1) {
            button.closest(selector).remove();
        }
        updateTotals();
    }

    // Event listener tombol tambah/hapus
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("tambah-alatbahan")) {
            cloneItem(e.target, ".alatbahan");
        }
        if (e.target.classList.contains("hapus-item-alatbahan")) {
            removeItem(e.target, ".alatbahan");
        }

        if (e.target.classList.contains("tambah-obatoralsalep")) {
            cloneItem(e.target, ".obatoralsalep");
        }
        if (e.target.classList.contains("hapus-item-obatoralsalep")) {
            removeItem(e.target, ".obatoralsalep");
        }
        if (e.target.classList.contains("hapus-semua-obatoralsalep")) {
            let container = e.target.closest(".obatoralsalep-container");
            container.innerHTML = "";
            updateTotals();
        }

        if (e.target.classList.contains("tambah-jasajasa")) {
            cloneItem(e.target, ".jasajasa");
        }
        if (e.target.classList.contains("hapus-item-jasajasa")) {
            removeItem(e.target, ".jasajasa");
        }
        if (e.target.classList.contains("hapus-semua-jasajasa")) {
            let container = e.target.closest(".jasajasa-container");
            container.innerHTML = "";
            updateTotals();
        }
    });

    // Jalankan pertama kali
    updateTotals();
});