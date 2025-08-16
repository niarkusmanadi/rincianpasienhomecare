//jasapasanginfus
document.getElementById("qty-pasang-infus").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 50000;
    let total = qty * harga;
    document.getElementById("total-pasang-infus").textContent = total.toLocaleString("id-ID");
});

//jasalepasinfus
document.getElementById("qty-lepas-infus").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 10000;
    let total = qty * harga;
    document.getElementById("total-lepas-infus").textContent = total.toLocaleString("id-ID");
});
