const flashdata = $('.flash-data').data('flashdata');
const link = $('.flash-link').data('flashdata');
const nama_instansi = $('.flash-instansi').data('flashdata');
// console.log(flashdata);
// console.log(link);
// console.log(nama_instansi);

var Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  customClass: {
    popup: 'my-toast',
    icon: 'icon-center',
    title: 'left-title',
    content: 'left-content',
  }
});

// NOTIF LOGIN LOGOUT
if (flashdata == "berhasil_login") {
  Swal.fire({
      title:'Website '+nama_instansi,
      text: 'Selamat datang bapak/ibu operator',
      icon: 'success',
  });
} else if (flashdata == "berhasil_thumbnail") {
  Swal.fire({
      title:'Berhasil',
      text: 'Berhasil Convert',
      icon: 'success',
  });
} else if (flashdata == "berhasil_logout") {
  Swal.fire({
      title:'Berhasil! ',
      text: 'Anda berhasil keluar dari Website '+nama_instansi,
      icon: 'success',
  });
} else if (flashdata == "berhasil_kirim_kritik") {
  Swal.fire({
      title:'Berhasil! ',
      text: 'Kritik dan saran anda berhasil dikirim',
      icon: 'success',
  });
} else if (flashdata == "berhasil_kirim_pertanyaan") {
  Swal.fire({
      title:'Berhasil! ',
      text: 'Pertanyaan anda berhasil dikirim dan akan segera dibalas oleh tim kami',
      icon: 'success',
  });
} else if (flashdata == "berhasil_reset") {
  Toast.fire({
      title:'Berhasil! ',
      text: 'Password berhasil direset',
      icon: 'success',
  });
} else if (flashdata == "berhasil_pass") {
  Toast.fire({
      title:'Berhasil! ',
      text: 'Password berhasil diubah',
      icon: 'success',
  });
} else if (flashdata == "gagal_pass") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Password gagal diubah',
      icon: 'warning',
  });
} else if (flashdata == "gagal_kirim_kritik") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Kritik dan saran anda gagal dikirim',
      icon: 'warning',
  });
} else if (flashdata == "gagal_kirim_kpertanyaan") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Pertanyaan anda gagal dikirim',
      icon: 'warning',
  });
} else if (flashdata == "gagal_pass_lama") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Password lama anda salah',
      icon: 'warning',
  });
} else if (flashdata == "gagal_reset") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Password gagal direset',
      icon: 'warning',
  });
} else if (flashdata == "gagal_password") {
  Swal.fire({
      title:'Opss! ',
      text: 'Maaf username atau password yang anda masukkan salah!, Silahkan dicoba kembali',
      imageUrl: link+'/public/assets/image/logo_buleleng_600.png',
      imageHeight: 150,
      
  });
} else if (flashdata == "lock") {
  Swal.fire({
      title:'Opss! ',
      text: 'Anda salah memasukkan username atau password sebanyak 3 kali, Silahkan dicoba beberapa saat lagi',
      icon: 'error',
  });
} else if (flashdata == "change_password") {
  Toast.fire({
      title:'Opss! ',
      text: 'Password anda terdeteksi password default, Silahkan rubah password anda di halaman login website dinas anda!',
      imageUrl: link+'/public/assets/image/logo_buleleng_600.png',
      imageHeight: 150,
  });
} else if (flashdata == "gagal_user") {
  Swal.fire({
      title:'Opss! ',
      text: 'Maaf Username atau password yang anda masukkan salah!, Silahkan dicoba kembali',
      imageUrl: link+'/public/assets/image/logo_buleleng_600.png',
      imageHeight: 150,
  });

// NOTIF BERHASIL CRUD
} else if (flashdata == "berhasil_simpan") {
  Toast.fire({
    title:'Berhasil! ',
    text: 'Data berhasil disimpan',
    icon: 'success',
  });
} else if (flashdata == "berhasil_ubah") {
  Toast.fire({
    title:'Berhasil! ',
    text: 'Data berhasil diubah',
    icon: 'success',
  });
} else if (flashdata == "berhasil_hapus") {
  Toast.fire({
      title:'Berhasil! ',
      text: 'Data berhasil dihapus',
      icon: 'success',
  });

// NOTIF GAGAL CRUD
} else if (flashdata == "gagal_simpan") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Data gagal disimpan',
      icon: 'error',
  });
} else if (flashdata == "gagal_ubah") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Data gagal diubah',
      icon: 'error',
  });
} else if (flashdata == "gagal_hapus") {
  Toast.fire({
      title:'Gagal! ',
      text: 'Data gagal dihapus',
      icon: 'error',
  });
} else if (flashdata == "gagal_reset") {
  Swal.fire({
      title:'Gagal! ',
      text: 'Password gagal direset',
      icon: 'error',
  });
} else if (flashdata == "gagal_file_size") {
  Swal.fire({
      title:'Gagal! ',
      text: 'Ukuran file melebihi batas yang sudah ditentukan',
      icon: 'error',
  });
} else if (flashdata == "gagal_file_ext") {
  Swal.fire({
      title:'Gagal! ',
      text: 'Ekstensi file tidak sesuai dengan yang sudah ditentukan',
      icon: 'error',
  });
} else if (flashdata == "gagal_load") {
  Swal.fire({
      title:'Gagal! ',
      text: 'Gagal undah data, silahkan di refresh halaman browser anda',
      icon: 'error',
  });
}

// modal edit permohonan
$(document).on('click', '#btn-edit-permohonan', function(){
  $('.modal-body #id_permohonan').val($(this).data('id_permohonan'));
  $('.modal-body #objek_kegiatan').val($(this).data('objek_kegiatan'));
  $('.modal-body #tanggal').val($(this).data('tanggal'));
  $('.modal-body #bahp').val($(this).data('bahp'));
  $('.modal-body #nama_penyedia').val($(this).data('nama_penyedia'));
  $('.modal-body #dana').val($(this).data('dana'));
  $('.modal-body #tahun_anggaran').val($(this).data('tahun_anggaran'));
})

//tombol logout
$('.tombol_logout').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');

    const swalWithBootstrapButtons = Swal.mixin({
        // customClass: {
        //   confirmButton: 'btn btn-success',
        //   cancelButton: 'btn btn-warning'
        // },
        // buttonsStyling: true
        confirmButtonColor: '#28A745',
        cancelButtonColor: '#6C757D'
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Apakah anda yakin?',
        text: "Anda akan keluar dari Website ini",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, keluar!',
        cancelButtonText: 'Tidak, batalkan!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
        //   swalWithBootstrapButtons.fire(
        //     'Berhasil!',
        //     'Anda berhasil keluar dari SILEGA',
        //     'success',
        //   )
          document.location.href = href;
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          // swalWithBootstrapButtons.fire(
          //   'Dibatalkan',
          //   'Anda batal keluar dari SILEGA',
          //   'error'
          // )
          Toast.fire({
            title:'Dibatalkan! ',
            text: 'Anda batal keluar dari Website ini',
            icon: 'error',
          })
        }
      })
});

// tombol hapus
$('.tombol_hapus').on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#6C757D'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Data yang terhapus tidak bisa dikembalikan lagi!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swalWithBootstrapButtons.fire(
      //   'Dibatalkan',
      //   'Hapus data dibatalkan',
      //   'error'
      // )
      Toast.fire({
        title:'Dibatalkan! ',
        text: 'Hapus data dibatalkan',
        icon: 'error',
      })
    }
  })
});

// tombol hapus
$(document).on('click', '#tombol_hapus', function(e){
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
      confirmButtonColor: '#28A745',
      cancelButtonColor: '#6C757D'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Data yang terhapus tidak bisa dikembalikan lagi!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swalWithBootstrapButtons.fire(
      //   'Dibatalkan',
      //   'Hapus data dibatalkan',
      //   'error'
      // )
      Toast.fire({
        title:'Dibatalkan! ',
        text: 'Hapus data dibatalkan',
        icon: 'error',
      })
    }
  })
});

// tombol reset
$('.tombol_reset').on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
    confirmButtonColor: '#28A745',
      cancelButtonColor: '#6C757D'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Password akan direset ke password default",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, reset!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Dibatalkan',
        'Reset password dibatalkan',
        'error'
      )
    }
  })
});

// tombol ubah status
$('.tombol_ubah_status').on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
    confirmButtonColor: '#28A745',
    cancelButtonColor: '#d33'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Data yang sudah di simpan tidak bisa di rubah kembali",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, simpan!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swalWithBootstrapButtons.fire(
      //   'Dibatalkan',
      //   'Simpan data dibatalkan',
      //   'error'
      // )
      Toast.fire({
        title:'Dibatalkan! ',
        text: 'Simpan data dibatalkan',
        icon: 'error',
      })
    }
  })
});

// tombol kirim
$('.tombol_kirim').on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
    confirmButtonColor: '#28A745',
    cancelButtonColor: '#d33'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Surat yang sudah di Kirim tidak bisa di rubah kembali",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Kirim!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swalWithBootstrapButtons.fire(
      //   'Dibatalkan',
      //   'Kirim Surat dibatalkan',
      //   'error'
      // )
      Toast.fire({
        title:'Dibatalkan! ',
        text: 'Kirim surat dibatalkan',
        icon: 'error',
      })
    }
  })
});

// tombol kirim file/berkas
$('.tombol_kirim_berkas').on('click', function (e) {
  e.preventDefault();
  const href = $(this).attr('href');

  const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33'
    // },
    // buttonsStyling: true
    confirmButtonColor: '#28A745',
    cancelButtonColor: '#d33'
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Apakah anda yakin?',
    text: "Berkas yang sudah di Kirim tidak bisa di rubah kembali",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Kirim!',
    cancelButtonText: 'Tidak, batalkan!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = href;
      // swalWithBootstrapButtons.fire(
      //   'Berhasil!',
      //   'Data berhasil dihapus',
      //   'success',
      // )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // swalWithBootstrapButtons.fire(
      //   'Dibatalkan',
      //   'Kirim Surat dibatalkan',
      //   'error'
      // )
      Toast.fire({
        title:'Dibatalkan! ',
        text: 'Kirim berkas dibatalkan',
        icon: 'error',
      })
    }
  })
});
