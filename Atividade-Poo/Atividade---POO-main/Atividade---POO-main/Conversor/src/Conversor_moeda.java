class ConversorMoeda {
    public static double converter(Moeda moedaOrigem, Moeda moedaDestino, double valor) {
        // Suponha que a taxa de conversão seja fixa para simplificar o exemplo
        // Você pode substituir isso por uma chamada a um serviço de câmbio real
        double taxaConversao = 1.0;

        if (moedaOrigem.getUnidade().equals("Euro") && moedaDestino.getUnidade().equals("Dolar")) {
            taxaConversao = 1.1; // Exemplo de taxa de conversão Euro para Dólar
        } else if (moedaOrigem.getUnidade().equals("Dolar") && moedaDestino.getUnidade().equals("Real")) {
            taxaConversao = 5.0; // Exemplo de taxa de conversão Dólar para Real
        } else if (moedaOrigem.getUnidade().equals("Real") && moedaDestino.getUnidade().equals("Euro")) {
            taxaConversao = 0.2; // Exemplo de taxa de conversão Real para Euro
        }

        return valor * taxaConversao;
    }
}
