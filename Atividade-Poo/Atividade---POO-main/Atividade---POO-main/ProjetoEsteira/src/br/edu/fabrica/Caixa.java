package br.edu.fabrica;

import javax.swing.JOptionPane;

public class Caixa {
	public int quantGarrafas;
	
	public void encherCaixa() {
		int ligar;
		for(int  i = 0; i < 3; i++) {
			JOptionPane.showConfirmDialog(null,"Ponha a " + (i+1)+ " garrafa na caixa","NULL", + JOptionPane.YES_OPTION);
			quantGarrafas++;
		}	
		while(true) {	
			ligar = Integer.parseInt(JOptionPane.showInputDialog(null, "A caixa já tem "+ quantGarrafas +" garrafas\nLigue a Esteira para a caixa ser levada ao caminhão \n[1] Ligar"));
			if(ligar == 1) {
				Esteira.ligar();
				Esteira.desligar();
				break;
			}
			else {
				JOptionPane.showMessageDialog(null, "Erro na escolha", null, JOptionPane.ERROR_MESSAGE);
			}
		}
	}
}
