document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("alatbahan-container");

  function updateItem(item) {
    const select = item.querySelector(".mcm-alatbahan");
    const hargaSpan = item.querySelector(".harga-alatbahan");
    const qtyInput = item.querySelector(".qty-alatbahan");
    const totalSpan = item.querySelector(".total-alatbahan");

    const harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
    const qty = parseInt(qtyInput.value) || 0;
    const total = harga * qty;

    hargaSpan.textContent = harga.toLocaleString();
    totalSpan.textContent = total.toLocaleString();
  }

  function attachEvents(item) {
    const select = item.querySelector(".mcm-alatbahan");
    const qtyInput = item.querySelector(".qty-alatbahan");
    const hapusBtn = item.querySelector(".hapus-item-alatbahan");
    const tambahBtn = item.querySelector(".tambah-alatbahan");

    select.addEventListener("change", () => updateItem(item));
    qtyInput.addEventListener("input", () => updateItem(item));

    hapusBtn.addEventListener("click", () => {
      if (container.children.length > 1) {
        item.remove();
      } else {
        alert("Minimal satu item harus ada.");
      }
    });

    tambahBtn.addEventListener("click", () => {
      const clone = item.cloneNode(true);
      attachEvents(clone);
      updateItem(clone);
      container.appendChild(clone);
    });

    updateItem(item);
  }

  // Pasang event di item awal
  const firstItem = container.querySelector(".alatbahan");
  attachEvents(firstItem);
});
