document.addEventListener("DOMContentLoaded", function () {

  function setupKategori(containerId, itemClass, selectClass, hargaClass, qtyClass, totalClass, hapusBtnClass, tambahBtnClass, hapusSemuaBtnClass) {
    const container = document.getElementById(containerId);

    function updateItem(item) {
      const select = item.querySelector("." + selectClass);
      const hargaSpan = item.querySelector("." + hargaClass);
      const qtyInput = item.querySelector("." + qtyClass);
      const totalSpan = item.querySelector("." + totalClass);

      const harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
      const qty = parseInt(qtyInput.value) || 0;
      const total = harga * qty;

      hargaSpan.textContent = harga.toLocaleString();
      totalSpan.textContent = total.toLocaleString();
    }

    function attachEvents(item) {
      const select = item.querySelector("." + selectClass);
      const qtyInput = item.querySelector("." + qtyClass);
      const hapusBtn = item.querySelector("." + hapusBtnClass);
      const tambahBtn = item.querySelector("." + tambahBtnClass);
      const hapusSemuaBtn = item.querySelector("." + hapusSemuaBtnClass);

      select.addEventListener("change", () => updateItem(item));
      qtyInput.addEventListener("input", () => updateItem(item));

      hapusBtn.addEventListener("click", () => {
        if (container.querySelectorAll("." + itemClass).length > 1) {
          item.remove();
        } else {
          alert("Minimal harus ada 1 baris.");
        }
      });

      tambahBtn.addEventListener("click", () => {
        const newItem = createNewItem();
        container.appendChild(newItem);
      });

      hapusSemuaBtn.addEventListener("click", () => {
        container.querySelectorAll("." + itemClass).forEach(el => el.remove());
        container.appendChild(createNewItem());
      });

      updateItem(item);
    }

    function createNewItem() {
      const template = container.querySelector("." + itemClass);
      const clone = template.cloneNode(true);

      clone.querySelector("." + qtyClass).value = 1;
      clone.querySelector("." + hargaClass).textContent = "0";
      clone.querySelector("." + totalClass).textContent = "0";

      attachEvents(clone);
      return clone;
    }

    attachEvents(container.querySelector("." + itemClass));
  }

  // Panggil untuk Obat Oral/Salep
  setupKategori(
    "obatoralsalep-container",
    "obatoralsalep",
    "mcm-obatoralsalep",
    "harga-obatoralsalep",
    "qty-obatoralsalep",
    "total-obatoralsalep",
    "hapus-item-obatoralsalep",
    "tambah-obatoralsalep",
    "hapus-semua-obatoralsalep"
  );

  // Panggil untuk Jasa-Jasa
  setupKategori(
    "jasajasa-container",
    "jasajasa",
    "mcm-jasajasa",
    "harga-jasajasa",
    "qty-jasajasa",
    "total-jasajasa",
    "hapus-item-jasajasa",
    "tambah-jasajasa",
    "hapus-semua-jasajasa"
  );

});
