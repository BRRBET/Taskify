// Función para generar código de referido
function generateRefCode() {
    return Math.random().toString(36).substr(2, 4).toUpperCase();
}

// Función para copiar link de referido
function copyLink() {
    const refLink = document.getElementById('refLink');
    refLink.select();
    document.execCommand('copy');
    alert('Link copiado al portapapeles!');
}

// Manejar registro
document.getElementById('registerForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const refCode = document.getElementById('refCode').value;
    // Aquí iría la lógica de registro
    console.log('Registro con código de referido:', refCode);
});

// Manejar login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí iría la lógica de login
    console.log('Intento de login');
});
