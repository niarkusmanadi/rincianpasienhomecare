// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.getElementById("obatoralsalep-container");

//   function updateItem(item) {
//     const select = item.querySelector(".mcm-obatoralsalep");
//     const hargaSpan = item.querySelector(".harga-obatoralsalep");
//     const qtyInput = item.querySelector(".qty-obatoralsalep");
//     const totalSpan = item.querySelector(".total-obatoralsalep");

//     const harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
//     const qty = parseInt(qtyInput.value) || 0;
//     const total = harga * qty;

//     hargaSpan.textContent = harga.toLocaleString();
//     totalSpan.textContent = total.toLocaleString();
//   }

//   function attachEvents(item) {
//     const select = item.querySelector(".mcm-obatoralsalep");
//     const qtyInput = item.querySelector(".qty-obatoralsalep");
//     const hapusBtn = item.querySelector(".hapus-item-obatoralsalep");
//     const tambahBtn = item.querySelector(".tambah-obatoralsalep");

//     select.addEventListener("change", () => updateItem(item));
//     qtyInput.addEventListener("input", () => updateItem(item));

//     hapusBtn.addEventListener("click", () => {
//       if (container.children.length > 1) {
//         item.remove();
//       } else {
//         alert("Minimal satu item harus ada.");
//       }
//     });

//     tambahBtn.addEventListener("click", () => {
//       const clone = item.cloneNode(true);
//       attachEvents(clone);
//       updateItem(clone);
//       container.appendChild(clone);
//     });

//     updateItem(item);
//   }

//   // Event untuk item pertama
//   const firstItem = container.querySelector(".obatoralsalep");
//   attachEvents(firstItem);
// });


// document.addEventListener("DOMContentLoaded", function () {

//   function setupKategori(containerId, itemClass, selectClass, hargaClass, qtyClass, totalClass, hapusClass, tambahClass, hapusSemuaClass) {
//     const container = document.getElementById(containerId);

//     function updateItem(item) {
//       const select = item.querySelector(`.${selectClass}`);
//       const hargaSpan = item.querySelector(`.${hargaClass}`);
//       const qtyInput = item.querySelector(`.${qtyClass}`);
//       const totalSpan = item.querySelector(`.${totalClass}`);

//       const harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
//       const qty = parseInt(qtyInput.value) || 0;
//       const total = harga * qty;

//       hargaSpan.textContent = harga.toLocaleString();
//       totalSpan.textContent = total.toLocaleString();
//     }

//     function attachEvents(item) {
//       const select = item.querySelector(`.${selectClass}`);
//       const qtyInput = item.querySelector(`.${qtyClass}`);
//       const hapusBtn = item.querySelector(`.${hapusClass}`);
//       const tambahBtn = item.querySelector(`.${tambahClass}`);

//       select.addEventListener("change", () => updateItem(item));
//       qtyInput.addEventListener("input", () => updateItem(item));

//       hapusBtn.addEventListener("click", () => {
//         if (container.querySelectorAll(`.${itemClass}`).length > 1) {
//           item.remove();
//         } else {
//           alert("Minimal satu item harus ada.");
//         }
//       });

//       tambahBtn.addEventListener("click", () => {
//         const clone = item.cloneNode(true);
//         attachEvents(clone);
//         updateItem(clone);
//         container.insertBefore(clone, container.querySelector(`.${hapusSemuaClass}`));
//       });

//       updateItem(item);
//     }

//     // Tombol hapus semua
//     const hapusSemuaBtn = container.querySelector(`.${hapusSemuaClass}`);
//     hapusSemuaBtn.addEventListener("click", () => {
//       container.querySelectorAll(`.${itemClass}`).forEach(el => el.remove());
//       const newItem = container.querySelector(`.${itemClass}`).cloneNode(true);
//       container.insertBefore(newItem, hapusSemuaBtn);
//       attachEvents(newItem);
//       updateItem(newItem);
//     });

//     // Pasang event ke item awal
//     const firstItem = container.querySelector(`.${itemClass}`);
//     attachEvents(firstItem);
//   }

//   // Contoh pemakaian untuk kategori Obat Oral/Salep
//   setupKategori(
//     "obatoralsalep-container",  // id container
//     "obatoralsalep",            // class tiap item
//     "mcm-obatoralsalep",        // class select
//     "harga-obatoralsalep",      // class harga
//     "qty-obatoralsalep",        // class qty
//     "total-obatoralsalep",      // class total
//     "hapus-item-obatoralsalep", // class tombol hapus
//     "tambah-obatoralsalep",     // class tombol tambah
//     "hapus-semua-obatoralsalep" // class tombol hapus semua
//   );

// });

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("obatoralsalep-container");

  // Fungsi hitung ulang harga & total
  function updateItem(item) {
    const select = item.querySelector(".mcm-obatoralsalep");
    const hargaSpan = item.querySelector(".harga-obatoralsalep");
    const qtyInput = item.querySelector(".qty-obatoralsalep");
    const totalSpan = item.querySelector(".total-obatoralsalep");

    const harga = parseInt(select.selectedOptions[0].dataset.harga) || 0;
    const qty = parseInt(qtyInput.value) || 0;
    const total = harga * qty;

    hargaSpan.textContent = harga.toLocaleString();
    totalSpan.textContent = total.toLocaleString();
  }

  // Fungsi pasang semua event listener pada 1 item
  function attachEvents(item) {
    const select = item.querySelector(".mcm-obatoralsalep");
    const qtyInput = item.querySelector(".qty-obatoralsalep");
    const hapusBtn = item.querySelector(".hapus-item-obatoralsalep");
    const tambahBtn = item.querySelector(".tambah-obatoralsalep");
    const hapusSemuaBtn = item.querySelector(".hapus-semua-obatoralsalep");

    // Ganti pilihan / qty → update total
    select.addEventListener("change", () => updateItem(item));
    qtyInput.addEventListener("input", () => updateItem(item));

    // Tombol hapus baris
    hapusBtn.addEventListener("click", () => {
      if (container.querySelectorAll(".obatoralsalep").length > 1) {
        item.remove();
      } else {
        alert("Minimal harus ada 1 baris.");
      }
    });

    // Tombol tambah baris
    tambahBtn.addEventListener("click", () => {
      const newItem = createNewItem();
      container.appendChild(newItem);
    });

    // Tombol hapus semua
    hapusSemuaBtn.addEventListener("click", () => {
      container.querySelectorAll(".obatoralsalep").forEach(el => el.remove());
      container.appendChild(createNewItem());
    });

    // Hitung awal
    updateItem(item);
  }

  // Fungsi bikin baris baru
  function createNewItem() {
    const template = container.querySelector(".obatoralsalep");
    const clone = template.cloneNode(true);

    // Reset nilai
    clone.querySelector(".qty-obatoralsalep").value = 1;
    clone.querySelector(".harga-obatoralsalep").textContent = "0";
    clone.querySelector(".total-obatoralsalep").textContent = "0";

    attachEvents(clone);
    return clone;
  }

  // Pasang event di baris awal
  attachEvents(container.querySelector(".obatoralsalep"));
});
