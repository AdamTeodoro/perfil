

export class Contato {
    
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _mensagem: string;

    constructor(
        nome: string,
        email: string,
        telefone: string,
        mensagem: string
    ) {

        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._mensagem = mensagem;

    }

    get nome() {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }

    get telefone() {
        return this._telefone;
    }
    set telefone(telefone) {
        this._telefone= telefone;
    }

    get mensagem() {
        return this._mensagem;
    }
    set mensagem(mensagem) {
        this._mensagem= mensagem;
    }
}
