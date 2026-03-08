class Cachorro extends Animal {
    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    public String emit_sound() {
        return "Au!";
    }

    public String correndo() {
        return this.nome + " correndo.";
    }
}