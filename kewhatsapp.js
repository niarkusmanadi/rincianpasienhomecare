 function kirimWa() {

    // Data pasien
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let jarak = document.querySelector('select[name="jarak-pasien"]').value;
    let pasienklinik = document.querySelector('select[name="pasien-klinik"]').value;
    let MRS = document.getElementById("MRS").value;
    let KRS = document.getElementById("KRS").value;

    // Alat-alat
    let qtyinfus = document.getElementById("qty-infus").value;
    let totalinfus = document.getElementById("total-infus").value;
    let qtysurflo = document.getElementById("qty-surflo").value;
    let totalsurflo = document.getElementById("total-surflo").value;
    let qtyspuit = document.getElementById("qty-spuit").value;
    let totalspuit = document.getElementById("total-spuit").value;
    let qtyhipafix = document.getElementById("qty-hipafix").value;
    let totalhipafix = document.getElementById("total-hipafix").value;
   
    // Jasa
    let qtypasanginfus = document.getElementById("qty-pasang-infus").value;
    let totalpasanginfus = document.getElementById("total-pasang-infus").value;
    let qtylepasinfus = document.getElementById("qty-lepas-infus").value;
    let totallepasinfus = document.getElementById("total-lepas-infus").value;
    let qtyterapidokter = document.getElementById("qty-terapi-dokter").value;
    let totalterapidokter = document.getElementById("total-terapi-dokter").value;

    // Lain-lain
    let jasakeperawatan = document.getElementById("jasakeperawatan").value;
    let totalkeperawatan = document.getElementById("total-jasakeperawatan").value;
    let totaladministrasi = document.getElementById("total-administrasi").value;
    let obatperawatan = document.getElementById("obat_perawatan").value;
    let totalobatperawatan = document.getElementById("total_obat_perawatan").value;
    let obatbawapulang = document.getElementById("obat_bawapulang").value;
    let totalobatbawapulang = document.getElementById("total_obat_bawapulang").value;
    let totalbiaya = document.getElementById("total-biaya").value;

    // Transport & dokter
    let qtytransportperawat = document.getElementById("qty-transportperawat").value;
    let btransportperawat = document.getElementById("btransportperawat").value;
    let totalbiayatransportperawat = document.getElementById("total-biayatransportperawat").value;
    let qtytransportperawatoffjadwal = document.getElementById("qty-transportperawat-offjadwal").value;
    let btransportperawatoffjadwal = document.getElementById("btransportperawat-offjadwal").value;
    let totalbiayatransportperawatoffjadwal = document.getElementById("total-biayatransportperawat-offjadwal").value;
    let biayavisitedokter = document.getElementById("biaya-visitedokter").value;

    let totalbiayatambahan = document.getElementById("total-biaya-tambahan").value;
    let totalbiayaharusdibayar = document.getElementById("total-biaya-harusdibayar").value;

    // Nomor WA tujuan (format internasional tanpa + atau 0 di depan)
    let nomor = "6285175003441";

    // Format pesan
    let pesan = `*Rincian Pasien*

Biaya perawatan 
${nama} / ~ th
${alamat} 
Jarak ${jarak}

PX ${pasienklinik} 

Mrs : ${MRS}
Krs : ${KRS}

1. Alat-alat 
- Infus set ${qtyinfus} x 25.000 = ${totalinfus}
- Jarum infus Surflo ${qtysurflo} x 27.500 = ${totalsurflo}
- Spuit ${qtyspuit} x 5.000 = ${totalspuit}
- Hypafix, kassa, plaster, kapas alkohol ${qtyhipafix}x 37.500 = ${totalhipafix}

2. Jasa pasang infus ${qtypasanginfus} x 50.000 = ${totalpasanginfus}
   Jasa lepas infus ${qtylepasinfus} x 10.000 = ${totallepasinfus}

3. Jasa terapi dokter 
${qtyterapidokter} x 80.000 = ${totalterapidokter}

4. Biaya cairan infus 

5. Biaya obat-obatan injeksi / suntikan 

6. Jasa medis petugas keperawatan
${jasakeperawatan} x 85.000 = ${totalkeperawatan}

7. Biaya administrasi dan materai = ${totaladministrasi}

8. Obat selama perawatan = ${totalobatperawatan}
${obatperawatan}

9. Obat bawa pulang = ${totalobatbawapulang}
${obatbawapulang}

Total                 = ${totalbiaya}
Potongan              = -
Total akhir           = -

*Biaya tambahan*:
- Transport perawat ${qtytransportperawat} x ${btransportperawat} = ${totalbiayatransportperawat}
- Visite dokter = ${biayavisitedokter}
- Off jadwal ${qtytransportperawatoffjadwal} x ${btransportperawatoffjadwal} = ${totalbiayatransportperawatoffjadwal}

Total Biaya Tambahan = ${totalbiayatambahan}
Total Harus Dibayar  = ${totalbiayaharusdibayar}`;

    // Redirect ke WhatsApp
// Buka WhatsApp
      window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");

    
  };
