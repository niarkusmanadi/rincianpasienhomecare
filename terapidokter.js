//terapidokter  
document.getElementById("qty-terapi-dokter").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 80000;
    let total = qty * harga;
    document.getElementById("total-terapi-dokter").textContent = total.toLocaleString("id-ID");
});