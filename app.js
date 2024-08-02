function calcular(tipo, valor) {
    
    if (tipo === 'acao') {
          
        if(valor === 'c') {
        //limpar o visor(id resultado)
        document.getElementById('resultado').value = '';
        } 
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.')  {

         document.getElementById('resultado').value += valor;

        }  

        if (valor === '=') {
            //eval é o comando para calcular automaticamente
          let valorCampo = eval(document.getElementById('resultado').value);
          document.getElementById('resultado').value = valorCampo;
        }
 
    } else if (tipo === 'valor') {
       
        document.getElementById('resultado').value += valor;
    }
}