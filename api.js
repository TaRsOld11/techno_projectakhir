const API_BASE_URL = "https://technopreneur-project-akhir-api.vercel.app";
const API_KEY = "adonsukasagiri"; 

function getToken() {
    return localStorage.getItem('token');
}

// Header untuk Login/Register (Cuma butuh API Key)
function getPublicHeaders() {
    return {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    };
}

// Header untuk Dashboard/Transaksi (Butuh API Key + Token)
function getAuthHeaders() {
    const token = getToken();
    
    // Debugging: Cek di console apakah token terbaca saat request
    if (!token) {
        console.error("❌ TOKEN HILANG! User belum login atau token terhapus.");
    } else {
        console.log("✅ Mengirim Request dengan Token:", token.substring(0, 10) + "...");
    }

    return {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,           // "Kunci Pagar"
        'Authorization': `Bearer ${token}` // "Tiket Masuk"
    };
}

function checkAuth() {
    if (!getToken()) {
        alert("Sesi habis, silakan login kembali.");
        window.location.href = 'signin.html';
    }
}