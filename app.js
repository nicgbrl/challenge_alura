function limparCampos() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

document.getElementById('buttonCriptografar').addEventListener('click', () => {
    let textoEntrada = document.getElementById('inputText').value;
    let textoSaida = '';

    if (/[^a-z\s]/.test(textoEntrada)) {
        alert("Somente letras minúsculas e espaços são permitidos.");
        return;
    }

    for (let char of textoEntrada) {
        if (char === ' ') {
            textoSaida += ' ';
        } else {
            textoSaida += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    document.getElementById('outputText').value = textoSaida;
});

document.getElementById('buttonDescriptografar').addEventListener('click', () => {
    let textoEntrada = document.getElementById('inputText').value;
    let textoSaida = '';

    if (/[^a-z\s]/.test(textoEntrada)) {
        alert("Somente letras minúsculas e espaços são permitidos.");
        return;
    }

    for (let char of textoEntrada) {
        if (char === ' ') {
            textoSaida += ' ';
        } else {
            textoSaida += char === 'a' ? 'z' : String.fromCharCode(char.charCodeAt(0) - 1);
        }
    }

    document.getElementById('outputText').value = textoSaida;
});

document.getElementById('buttonCopiarTexto').addEventListener('click', async () => {
    let outputText = document.getElementById('outputText').value;
    try {
        await navigator.clipboard.writeText(outputText);
        alert("Texto copiado!");
        limparCampos();
    } catch (err) {
        alert("Falha ao copiar o texto: " + err);
    }
});