const { v4: uuidv4 } = require('uuid');

class Filme {
    constructor(id, titulo, diretor, ano, genero, nota) {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.ano = ano;
        this.genero = genero;
        this.nota = nota;
    }
    likes() {
        this.likes += 1;
    }
}

export default Filme;