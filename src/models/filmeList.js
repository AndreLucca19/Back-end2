class filmeList {
    constructor() {
        this.lista = [];
    }
    add(filme) {
        this.lista.push(filme);
    }
    getAllfilmes() {
        return this.lista;
    }

    getFilmeById(id) {
        const filme = this.lista.find(filme => filme.id === id);
        if (!filme) {
            throw new Error('Filme não encontrado');
        }
        return filme;
    }
    updateFilme(id, titulo, diretor, ano, genero, nota) {
        const filme = this.getFilmeById(id);
        Object.assign(filme, { titulo, diretor, ano, genero, nota });
        return filme;
    }
    deleteFilme(id) {
        const filme = this.getFilmeById(id);
        const index = this.lista.indexOf(filme);
        this.lista.splice(index, 1);
    }
    getTop10filmes() {
        return this.lista
            .sort((a, b) => b.nota - a.nota)
            .slice(0, 10);
    }
    getTotalfilmes() {
        return this.lista.length;
    }
}

export default filmeList;