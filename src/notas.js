class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const Alunos = [
new Aluno("Arthur", 7),
new Aluno("Marcos", 5),
new Aluno("Gabriela", 9),
new Aluno("Carla", 4)
];

function NotasAlunos(Alunos) {
return Alunos.filter(Aluno => Aluno.nota >= 6);
}

const NotasE_Alunos = NotasAlunos(Alunos);

NotasE_Alunos.forEach(Aluno => {
console.log(`${Aluno.nome} - ${Aluno.nota}`);
});