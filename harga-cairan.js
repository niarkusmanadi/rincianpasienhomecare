// ...existing code...

document.querySelectorAll('.item input[type="number"]').forEach(input => {
    input.addEventListener('input', function(){
        let harga = 0;
        switch(this.id) {
            case "qty-cairan-NS":
                harga = 25000;
                break;
            case "qty-cairan-asering":
                harga = 50000;
                break;
            case "qty-cairan-paracetamol":
                harga = 70000;
                break;
            case "qty-cairan-paracetamol2":
                harga = 50000;
                break;
            case "qty-cairan-metronidazole":
                harga = 60000;
                break;
            case "qty-cairan-rl":
                harga = 50000;
                break;
            default:
                harga = 0;
        }
        let qty = parseInt(this.value) || 0;
        let total = qty * harga;
        // Perbaikan di sini:
        this.nextElementSibling.textContent = total.toLocaleString("id-ID");
    });
});
// ...existing code...
//hapus cairan
function hapusItem(button) {
    button.parentElement.remove();
}