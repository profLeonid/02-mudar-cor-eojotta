'use strict'

const botaoTrocarCor = document.getElementById('botao-trocar-cor')
const botaoVermelho = document.getElementById('botao-trocar-cor-vermelho')
const botaoVerde = document.getElementById('botao-trocar-cor-verde')

function trocarCor () {
       let corUsuario = document.getElementById('cor-usuario').value


       if(corUsuario == 'vermelho'){
        corUsuario = 'red'
        }
        else if(corUsuario == 'verde'){
            corUsuario = 'green'
        }
        else if(corUsuario == 'azul'){
            corUsuario = 'blue'
        }
        else if(corUsuario == 'amarelo'){
            corUsuario = 'yellow'
        }

      document.documentElement.style.setProperty('--color-bg', corUsuario)
}
    function vermelho (){
        let corUsuario = document.getElementById('cor-usuario').value
        corUsuario = "red"
        document.documentElement.style.setProperty('--color-bg', corUsuario)

    }

    function verde (){
        let corUsuario = document.getElementById('cor-usuario').value
        corUsuario = "green"
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }


botaoTrocarCor.addEventListener('click' , trocarCor)
botaoVermelho.addEventListener('click', vermelho)
botaoVerde.addEventListener('click', verde)

