class Cavalo extends Animal {
    public Cavalo(String nome, int idade) {
        super(nome, idade);
    }

    public String emit_sound() {
        return "Cavalo!";
    }

    public String cavalgando() {
        return this.nome + " tá cavalgando.";
    }
}