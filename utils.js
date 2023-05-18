function toUpper(str){
    return str.toUpperCase();
}

function createLink(filename){
    return `<a href='${filename}'>${filename}</a>`;
}

function createVoltar(){
    return `<a href='/'>Voltar</a><br>`;
}

module.exports = {
    toUpper,
    createLink,
    createVoltar
}