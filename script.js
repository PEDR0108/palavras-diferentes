function calcula_hash(palavra) {
    let valor = 0;

    for (let index = 0; index < palavra.length; index++) {
        valor += palavra.charCodeAt(index);
    }

    return valor % 10;
}

function compararHashes() {
    const palavra1 = document
        .getElementById("palavra1")
        .value.trim().toLowerCase();

    const palavra2 = document
        .getElementById("palavra2")
        .value.trim().toLowerCase();

    const resultado = document.getElementById("resultado");

    if (palavra1.length < 2 || palavra2.length < 2) {
        resultado.className = "erro";
        resultado.textContent =
            "Digite duas palavras com pelo menos duas letras.";
        return;
    }

    if (palavra1 === palavra2) {
        resultado.className = "erro";
        resultado.textContent =
            "Digite duas palavras diferentes.";
        return;
    }

    const hash1 = calcula_hash(palavra1);
    const hash2 = calcula_hash(palavra2);

    resultado.className = "";

    resultado.innerHTML = `
        <p><strong>Palavra 1:</strong> ${palavra1}</p>
        <p><strong>Hash 1:</strong> ${hash1}</p>
        <p><strong>Palavra 2:</strong> ${palavra2}</p>
        <p><strong>Hash 2:</strong> ${hash2}</p>
        ${
            hash1 === hash2
                ? '<p class="sucesso">Colisão encontrada! Os hashes são iguais.</p>'
                : '<p class="erro">Os hashes são diferentes. Tente outras palavras.</p>'
        }
    `;
}