const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnCriptografar() {
    const textoEncriptado = Criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function Criptografar(stringCriptografada) {
    let matrixCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , "ufat"]
    ];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++) {
        if(stringCriptografada.includes(matrixCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1]);
        }
    }

    return stringCriptografada;
}


function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    mensagem.value = textoDescriptografado;
    textArea.value = "";
}


function descriptografar(stringDescriptografada) {
    let matrixCodigo = [
        ["e" , "enter"],
        ["i" , "imes"],
        ["a" , "ai"],
        ["o" , "ober"],
        ["u" , "ufat"]
    ];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++) {
        if(stringDescriptografada.includes(matrixCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}

function btnCopy() {
    const copiedText = document.querySelector(".mensagem");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
    copiedText.value = textArea.value;
    alert("Texto copiado, cole-o na area para descriptografar!");
    textArea.value = copiedText.value;
    copiedText.value = "";
}