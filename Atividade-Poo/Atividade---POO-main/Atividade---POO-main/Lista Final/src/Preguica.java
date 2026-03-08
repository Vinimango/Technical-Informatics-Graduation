class Preguica extends Animal {
    public Preguica(String nome, int idade) {
        super(nome, idade);
    }

    public String emit_sound() {
        return "*barulhos de preguiça*";
    }

    public String escalando() {
        return this.nome + " está escalando";
    }
}