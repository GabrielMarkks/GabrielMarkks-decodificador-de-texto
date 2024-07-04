document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos do DOM
    const textoInput = document.getElementById("texto");
    const criptografarBtn = document.getElementById("btn-criptografar");
    const descriptografarBtn = document.getElementById("btn-descriptografar");
    const resultadoContainer = document.querySelector(".content-aside");
    const imagemAside = document.querySelector(".imagem-aside");

    // Cria um botão para copiar o texto
    const copiarBtn = document.createElement("button");
    copiarBtn.textContent = "Copiar";
    copiarBtn.classList.add("btn");

    // Chaves de criptografia
    const chaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    // Função para criptografar o texto
    function criptografar(texto) {
        return texto.replace(/[eioua]/g, match => chaves[match]);
    }

    // Função para descriptografar o texto
    function descriptografar(texto) {
        let textoDescriptografado = texto;
        for (let key in chaves) {
            textoDescriptografado = textoDescriptografado.replace(new RegExp(chaves[key], 'g'), key);
        }
        return textoDescriptografado;
    }

    // Função para exibir o resultado na tela
    function exibirResultado(texto) {
        resultadoContainer.innerHTML = `<p>${texto}</p>`;
        resultadoContainer.appendChild(copiarBtn);
        imagemAside.style.display = 'none';
    }

    // Função para copiar o texto para a área de transferência
    function copiarParaClipboard(texto) {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = texto;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Texto copiado!");
    }

    // Evento de clique para o botão de criptografar
    criptografarBtn.addEventListener("click", () => {
        const texto = textoInput.value;
        // Verifica se o texto contém apenas letras minúsculas e sem acento
        if (/^[a-z\s]*$/.test(texto)) {
            exibirResultado(criptografar(texto));
        } else {
            alert("Apenas letras minúsculas e sem acento são permitidas.");
        }
    });

    // Evento de clique para o botão de descriptografar
    descriptografarBtn.addEventListener("click", () => {
        const texto = textoInput.value;
        // Verifica se o texto contém apenas letras minúsculas e sem acento
        if (/^[a-z\s]*$/.test(texto)) {
            exibirResultado(descriptografar(texto));
        } else {
            alert("Apenas letras minúsculas e sem acento são permitidas.");
        }
    });

    // Evento de clique para o botão de copiar
    copiarBtn.addEventListener("click", () => {
        const resultadoTexto = resultadoContainer.querySelector("p").textContent;
        copiarParaClipboard(resultadoTexto);
    });
});
