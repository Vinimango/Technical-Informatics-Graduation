package br.edu.fabrica;

import javax.swing.JOptionPane;

public class Esteira {

	public static void ligar() {
		JOptionPane.showMessageDialog(null, "Esteira ligada!");
		JOptionPane.showMessageDialog(null, "caixa entregue.");
	}
	public static void desligar() {
		JOptionPane.showConfirmDialog(null, "Desligue a esteira para continuar a operação","null", JOptionPane.YES_OPTION);
		JOptionPane.showMessageDialog(null, "Esteira desligada");
	
	}
}
