function sukses() {
    $.notifikasi({
        judulnotifikasi: 'Sukses', // judul notifikasi
        text: "Aksi Berhasil Dilakukan", // isi notifikasi
        ikon: 'sukses', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 80,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: true, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
}

function eror() {
    $.notifikasi({
        judulnotifikasi: 'Error', // judul notifikasi
        text: "Tindakan Tidak Dapat Di Lakukan", // isi notifikasi
        ikon: 'eror', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 80,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: false, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
}

function peringatan() {
    $.notifikasi({
        judulnotifikasi: 'Peringatan', // judul notifikasi
        text: "", // isi notifikasi
        ikon: 'peringatan', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 80,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: false, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
}

function kustom() {
    $.notifikasi({
        judulnotifikasi: 'Yuki', // judul notifikasi
        text: "", // isi notifikasi
        ikon: 'kustom', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 80,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: false, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
}