function jalankanTransisi(event) {
    event.preventDefault(); 
    
    // Ambil elemen kado dan semua titik (dots)
    const kado = document.querySelector('.kado');
    const dots = document.querySelectorAll('.dot');
    
    // 1. Kado mulai bergetar dan membesar (animasi CSS berjalan)
    kado.classList.add('animasi-buka');
    
    // 2. EFEK KADO TERBUKA: Ganti gambar kado tertutup menjadi terbuka
    // Ini terjadi 400ms (0.4 detik) setelah tombol ditekan, pas kado sedang bergetar
    setTimeout(function() {
        kado.src = 'Kado_buka.png'; // Pastikan kamu sudah punya file ini!
    }, 400); 
    
    // 3. EFEK TITIK BERGESER: Pindahkan status 'aktif' dari titik 1 ke titik 2
    if (dots.length > 1) {
        dots[0].classList.remove('aktif');
        dots[1].classList.add('aktif');
    }
    
    // 4. Layar memutih silau
    setTimeout(function() {
        document.body.classList.add('layar-silau');
    }, 800); 
    
    // 5. Pindah ke Halaman 2
    setTimeout(function() {
        window.location.href = 'halaman2.html';
    }, 1400); 
}

// Membersihkan animasi jika user menekan tombol "Back" di browser
window.addEventListener('pageshow', function(event) {
    document.body.classList.remove('layar-silau');
    
    const kado = document.querySelector('.kado');
    if (kado) {
        kado.classList.remove('animasi-buka');
        kado.src = 'Kado.png'; // Kembalikan ke gambar kado tertutup
    }

    const dots = document.querySelectorAll('.dot');
    if (dots.length > 1) {
        dots[1].classList.remove('aktif');
        dots[0].classList.add('aktif'); // Kembalikan titik aktif ke nomor 1
    }
});