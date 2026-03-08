public class Main {
    public static void main(String[] args) {
        // Instanciando, lol.
        Moeda euro = new Moeda(100, "Euro");
        Moeda dolar = new Moeda(120, "Dolar");
        Moeda real = new Moeda(500, "Real");

        // Necessário mudar o valor dentro do código, não vou usar scanner não
        double valorConvertido = ConversorMoeda.converter(euro, dolar, 50);
        System.out.println("50 Euros equivalem a " + valorConvertido + " Dólares");

        valorConvertido = ConversorMoeda.converter(dolar, real, 50);
        System.out.println("50 Dólares equivalem a " + valorConvertido + " Reais");

        valorConvertido = ConversorMoeda.converter(real, euro, 50);
        System.out.println("50 Reais equivalem a " + valorConvertido + " Euros");
    }
}