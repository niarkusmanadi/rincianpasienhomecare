 // hitung infus 
    document.getElementById("qty-infus").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 25000;
    let total = qty * harga;
    document.getElementById("total-infus").textContent = total.toLocaleString("id-ID");
});

// hitung surflo
 document.getElementById("qty-surflo").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 27500;
    let total = qty * harga;
    document.getElementById("total-surflo").textContent = total.toLocaleString("id-ID");
});

//hitung spuit
document.getElementById("qty-spuit").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 5000;
    let total = qty * harga;
    document.getElementById("total-spuit").textContent = total.toLocaleString("id-ID");
});
//hitung hipafix
document.getElementById("qty-hipafix").addEventListener("input", function(){
    let qty = parseInt(this.value) || 0; // kalau kosong dianggap 0
    let harga = 37500;
    let total = qty * harga;
    document.getElementById("total-hipafix").textContent = total.toLocaleString("id-ID");
});