//  function kirimWa() {

//     // Data pasien
//     let nama = document.getElementById("nama").value;
//     let alamat = document.getElementById("alamat").value;
//     let jarak = document.querySelector('select[name="jarak-pasien"]').value;
//     let pasienklinik = document.querySelector('select[name="pasien-klinik"]').value;
//     let MRS = document.getElementById("MRS").value;
//     let KRS = document.getElementById("KRS").value;

//     // Alat-alat
//     let qtyinfus = document.getElementById("qty-infus").value;
//     let totalinfus = document.getElementById("total-infus").innerText;
//     let qtysurflo = document.getElementById("qty-surflo").value;
//     let totalsurflo = document.getElementById("total-surflo").innerText;
//     let qtyspuit = document.getElementById("qty-spuit").value;
//     let totalspuit = document.getElementById("total-spuit").innerText;
//     let qtyhipafix = document.getElementById("qty-hipafix").value;
//     let totalhipafix = document.getElementById("total-hipafix").innerText;
   
//     // Jasa
//     let qtypasanginfus = document.getElementById("qty-pasang-infus").value;
//     let totalpasanginfus = document.getElementById("total-pasang-infus").innerText;
//     let qtylepasinfus = document.getElementById("qty-lepas-infus").value;
//     let totallepasinfus = document.getElementById("total-lepas-infus").innerText;
//     let qtyterapidokter = document.getElementById("qty-terapi-dokter").value;
//     let totalterapidokter = document.getElementById("total-terapi-dokter").innerText;

//     // Lain-lain
//     let jasakeperawatan = document.getElementById("jasakeperawatan").value;
//     let totalkeperawatan = document.getElementById("total-jasakeperawatan").innerText;
//     let totaladministrasi = document.getElementById("total-administrasi").innerText;
//     let obatperawatan = document.getElementById("obat_perawatan").value;
//     let totalobatperawatan = document.getElementById("total_obat_perawatan").innerText;
//     let obatbawapulang = document.getElementById("obat_bawapulang").value;
//     let totalobatbawapulang = document.getElementById("total_obat_bawapulang").value;
//     let totalbiaya = document.getElementById("total-biaya").innerText;

//     // Transport & dokter
//     let qtytransportperawat = document.getElementById("qty-transportperawat").value;
//     let btransportperawat = document.getElementById("btransportperawat").innerText;
//     let totalbiayatransportperawat = document.getElementById("total-biayatransportperawat").innerText;
//     let qtytransportperawatoffjadwal = document.getElementById("qty-transportperawat-offjadwal").value;
//     let btransportperawatoffjadwal = document.getElementById("btransportperawat-offjadwal").innerText;
//     let totalbiayatransportperawatoffjadwal = document.getElementById("total-biayatransportperawat-offjadwal").innerText;
//     let biayavisitedokter = document.getElementById("biaya-visitedokter").innerText;

//     let totalbiayatambahan = document.getElementById("total-biaya-tambahan").innerText;
//     let totalbiayaharusdibayar = document.getElementById("total-biaya-harusdibayar").innerText;

//     // Nomor WA tujuan (format internasional tanpa + atau 0 di depan)
//     let nomor = "6285175003441";

//     console.log({
//         totalbiayaharusdibayar,totalhipafix, totalinfus, totalsurflo, totalspuit, totalpasanginfus, totallepasinfus, totalterapidokter, totalkeperawatan, totaladministrasi, totalobatperawatan, totalobatbawapulang, totalbiayatransportperawat, totalbiayatransportperawatoffjadwal
//     })
//     // Format pesan
//     let pesan = `*Rincian Pasien*

// Biaya perawatan 
// ${nama} / ~ th
// ${alamat} 
// Jarak ${jarak}

// PX ${pasienklinik} 

// Mrs : ${MRS}
// Krs : ${KRS}

// 1. Alat-alat 
// - Infus set ${qtyinfus} x 25.000 = ${totalinfus}
// - Jarum infus Surflo ${qtysurflo} x 27.500 = ${totalsurflo}
// - Spuit ${qtyspuit} x 5.000 = ${totalspuit}
// - Hypafix, kassa, plaster, kapas alkohol ${qtyhipafix}x 37.500 = ${totalhipafix}

// 2. Jasa pasang infus ${qtypasanginfus} x 50.000 = ${totalpasanginfus}
//    Jasa lepas infus ${qtylepasinfus} x 10.000 = ${totallepasinfus}

// 3. Jasa terapi dokter 
// ${qtyterapidokter} x 80.000 = ${totalterapidokter}

// 4. Biaya cairan infus 

// 5. Biaya obat-obatan injeksi / suntikan 

// 6. Jasa medis petugas keperawatan
// ${jasakeperawatan} x 85.000 = ${totalkeperawatan}

// 7. Biaya administrasi dan materai = ${totaladministrasi}

// 8. Obat selama perawatan = ${totalobatperawatan}
// ${obatperawatan}

// 9. Obat bawa pulang = ${totalobatbawapulang}
// ${obatbawapulang}

// Total                 = ${totalbiaya}
// Potongan              = -
// Total akhir           = -

// *Biaya tambahan*:
// - Transport perawat ${qtytransportperawat} x ${btransportperawat} = ${totalbiayatransportperawat}
// - Visite dokter = ${biayavisitedokter}
// - Off jadwal ${qtytransportperawatoffjadwal} x ${btransportperawatoffjadwal} = ${totalbiayatransportperawatoffjadwal}

// Total Biaya Tambahan = ${totalbiayatambahan}
// Total Harus Dibayar  = ${totalbiayaharusdibayar}`;

//     // Redirect ke WhatsApp
// // Buka WhatsApp
//       window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");

    
//   };


function kirimWa() {
    // 🔹 Ambil helper untuk value / innerText
    function val(id) {
        return document.getElementById(id)?.value || "";
    }
    function txt(id) {
        return document.getElementById(id)?.innerText || "";
    }

    // 🔹 Data pasien
    let nama = val("nama");
    let alamat = val("alamat");
    let jarak = document.querySelector('select[name="jarak-pasien"]')?.value || "";
    let pasienklinik = document.querySelector('select[name="pasien-klinik"]')?.value || "";
    let MRS = val("MRS");
    let KRS = val("KRS");

    // 🔹 Alat-alat
    let qtyinfus = val("qty-infus");
    let totalinfus = txt("total-infus");
    let qtysurflo = val("qty-surflo");
    let totalsurflo = txt("total-surflo");
    let qtyspuit = val("qty-spuit");
    let totalspuit = txt("total-spuit");
    let qtyhipafix = val("qty-hipafix");
    let totalhipafix = txt("total-hipafix");
   
    // 🔹 Jasa
    let qtypasanginfus = val("qty-pasang-infus");
    let totalpasanginfus = txt("total-pasang-infus");
    let qtylepasinfus = val("qty-lepas-infus");
    let totallepasinfus = txt("total-lepas-infus");
    let qtyterapidokter = val("qty-terapi-dokter");
    let totalterapidokter = txt("total-terapi-dokter");

    // 🔹 Lain-lain
    let jasakeperawatan = val("jasakeperawatan");
    let totalkeperawatan = txt("total-jasakeperawatan");
    let totaladministrasi = txt("total-administrasi");
    let obatperawatan = val("obat_perawatan");
    let totalobatperawatan = val("total_obat_perawatan");
    let obatbawapulang = val("obat_bawapulang");
    let totalobatbawapulang = val("total_obat_bawapulang");
    let totalbiaya = txt("total-biaya");

    // 🔹 Transport & dokter
    let qtytransportperawat = val("qty-transportperawat");
    let btransportperawat = txt("btransportperawat");
    let totalbiayatransportperawat = txt("total-biayatransportperawat");
    let qtytransportperawatoffjadwal = val("qty-transportperawat-offjadwal");
    let btransportperawatoffjadwal = txt("btransportperawat-offjadwal");
    let totalbiayatransportperawatoffjadwal = txt("total-biayatransportperawat-offjadwal");
    let biayavisitedokter = txt("biaya-visitedokter");

    let totalbiayatambahan = txt("total-biaya-tambahan");
    let totalbiayaharusdibayar = txt("total-biaya-harusdibayar");

    // 🔹 Ambil data injeksi (loop semua .injeksi)
    let injeksiItems = document.querySelectorAll("#injeksi-container .injeksi");
    let injeksiText = "";
    injeksiItems.forEach((item, i) => {
        let select = item.querySelector(".mcm-injeksi");
        let namaObat = select.options[select.selectedIndex].text;
        let qty = item.querySelector(".qty-injeksi").value;
        let total = item.querySelector(".total-injeksi").innerText;

        injeksiText += `${'-'}. ${namaObat} x ${qty} = Rp ${total}\n`;
    });

    // 🔹 Nomor WA tujuan (format internasional tanpa + atau 0 di depan)
    let nomor = "6285175003441";

    // 🔹 Format pesan WhatsApp
    let pesan = `*Rincian Pasien*

👤 Pasien: ${nama} 
📍 Alamat: ${alamat}
🛣️ Jarak: ${jarak}
🏥 Klinik: ${pasienklinik} 

📅 Mrs: ${MRS}
📅 Krs: ${KRS}

*1. Alat-alat*
- Infus set ${qtyinfus} x 25.000 = ${totalinfus}
- Jarum infus Surflo ${qtysurflo} x 27.500 = ${totalsurflo}
- Spuit ${qtyspuit} x 5.000 = ${totalspuit}
- Hypafix, kassa, plaster, kapas alkohol ${qtyhipafix} x 37.500 = ${totalhipafix}

*2. Jasa*
- Pasang infus ${qtypasanginfus} x 50.000 = ${totalpasanginfus}
- Lepas infus ${qtylepasinfus} x 10.000 = ${totallepasinfus}
- Terapi dokter ${qtyterapidokter} x 80.000 = ${totalterapidokter}

*3. Injeksi / Suntikan*
${injeksiText || "-"} 

*4. Jasa medis keperawatan*
${jasakeperawatan} x 85.000 = ${totalkeperawatan}

*5. Administrasi*
${totaladministrasi}

*6. Obat selama perawatan*
${totalobatperawatan}
${obatperawatan}

*7. Obat bawa pulang*
${totalobatbawapulang}
${obatbawapulang}

💰 *Total* = ${totalbiaya}
🧾 Potongan = -
✅ Total akhir = -

*Biaya tambahan*:
- Transport perawat ${qtytransportperawat} x ${btransportperawat} = ${totalbiayatransportperawat}
- Visite dokter = ${biayavisitedokter}
- Off jadwal ${qtytransportperawatoffjadwal} x ${btransportperawatoffjadwal} = ${totalbiayatransportperawatoffjadwal}

📌 Total Biaya Tambahan = ${totalbiayatambahan}
💵 *Total Harus Dibayar* = ${totalbiayaharusdibayar}`;

    // 🔹 Redirect ke WhatsApp
    window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");
}

