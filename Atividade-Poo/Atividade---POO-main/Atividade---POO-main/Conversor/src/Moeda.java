class Moeda {
    private double valor;
    private String unidade;

    public Moeda(double valor, String unidade) {
        this.valor = valor;
        this.unidade = unidade;
    }

    public double getValor() {
        return valor;
    }

    public String getUnidade() {
        return unidade;
    }
}