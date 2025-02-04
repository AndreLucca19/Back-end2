const filme = require('../models/filmeList');
const Filme = require('../models/filme');

const filmeList = new filme();

const filme1 = new Filme('1', 'O Poderoso Chefão', 'Francis Ford Coppola', 1972, 'Drama', 9.2);
lista.addFilme(filme1);

lista.addFilme(new Filme('2', 'O Poderoso Chefão II', 'Francis Ford Coppola', 1974, 'Drama', 9.0));

const router = {
    addSong: (req, res) => {
        try {
            const { titulo, diretor, ano, genero, nota } = req.body;
            if(!title || !singer || !duration) {
                throw new Error('Preencha todos os campos!')
            }
            const music = new move (title, singer, duration, plays)
            lista.addFilme(music);
            res.status(200).json({message: "Criado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar musica", error});
        }
    },

    getAllSongs: (req, res) => {
        try {
            res.status(200).json(lista.getAllFilmes());
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar musicas", error});
        }
    },

    getFilmeById: (req, res) => {
        try {
            const { id } = req.params;
            res.status(200).json(lista.getFilmeById(id));
        } catch (error) {
            res.status(404).json({message: "Erro ao buscar musica", error});
        }
    }
}