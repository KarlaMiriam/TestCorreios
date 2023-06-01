/// <reference types="cypress" />

describe ('US0001 - Funcionalidade: Buscar CEP' , () => {

  var cepInvalido = "80700000"
  var cepValido = "01013-001"
  var codigoRastreio = "SS987654321BR"


    it('Buscar CEP inválido', () => {
      cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
      cy.get('#endereco').type(cepInvalido)
      cy.get('#tipoCEP').type('Todos')
      cy.get('#btn_pesquisar').click()
      cy.get('#mensagem-resultado-alerta').invoke('removeAttr', 'target').should('contain', 'Dados não encontrado')
    });
    
    it('Buscar CEP válido', () => {
      cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
      cy.get('#endereco').type(cepValido)
      cy.get('#tipoCEP').type('Todos')
      cy.get('#btn_pesquisar').click()
      cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('contain', 'Rua Quinze de Novembro - lado ímpar')
      cy.get('tbody > tr > [data-th="Localidade/UF"]').should('contain', 'São Paulo/SP')
    }); 

});