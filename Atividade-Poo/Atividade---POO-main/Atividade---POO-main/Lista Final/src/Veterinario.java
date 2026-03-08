class Veterinario {
    public static void examine(Animal animal) {
        System.out.println("Examinando " + animal.nome + ", barulho: " + animal.emit_sound());
    }
}