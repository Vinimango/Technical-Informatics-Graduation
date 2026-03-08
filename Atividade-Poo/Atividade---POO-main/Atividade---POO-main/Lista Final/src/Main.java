import java.util.Scanner;
    public class Main {
    public static void main(String[] args) {
        Cachorro cachorro = new Cachorro("Rex", 6);
        Cavalo cavalo = new Cavalo("Pé-de-Pano`", 5);
        Preguica preguica = new Preguica("Gorlock, o devorador", 921);

        Animal[] animals = {cachorro, cavalo, preguica};
        Scanner scanner = new Scanner(System.in);
        System.out.println("Escolha um animal para examinar (1 para Cachorro, 2 para Cavalo, 3 para Preguiça):");
        int choice = scanner.nextInt();

        Veterinario vet = new Veterinario();
        vet.examine(animals[choice - 1]);

        if (animals[choice - 1] instanceof Cachorro) {
            Cachorro d = (Cachorro) animals[choice - 1];
            System.out.println(d.correndo());
        } else if (animals[choice - 1] instanceof Cavalo) {
            Cavalo h = (Cavalo) animals[choice - 1];
            System.out.println(h.cavalgando());
        } else if (animals[choice - 1] instanceof Preguica) {
            Preguica s = (Preguica) animals[choice - 1];
            System.out.println(s.escalando());
        }
    }
    }