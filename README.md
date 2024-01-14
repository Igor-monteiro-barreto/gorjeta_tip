  # Projeto de uma calculadora de gorjeta 



 <p>Esse projeto eu me inspirei num video do youtube da <a href="https://www.youtube.com/@attekitadev" target="_blank" {: style="text-decoration:none;"}> Attekitadev </a>  Neste
   <a href="https://www.youtube.com/watch?v=l0822YMiZ8I&t=3s" {: style="text-decoration:none;"} >  video </a>   .Nesse video tem o link para o projeto original porém eu decidi modificar um pouco pois achei muito sujo e cheio de divs, então decidi praticar um pouco de meus conhecimentos em javascript. 
 </p>

## Então quando comecei a escrever o codigo me deparei com diversos problemas como por exemplo: 
 
 -Não aprecia cifrãos no resultado .
 
 -A variavel do valor da conta não armazenava direito.

 -A div de resuldado 'res' não aparecia quando deveria, pois estava com um problema com a definição de type.

 -Com a entrada de dados do usuario.


  <p> Para resolver esses problemas tive que realizar diversar modificações no javascript e tambem no HTML, isso vai desde mudar nomes de ID até usar outras propriedades para substir as divs,
    por outras tags para ficar mais organizado.
  </p>


<h3>Quanto ao problema de armazenamento da variaveis.</h3>

  Esse foi o mais simples de se resolver, porém a div 'res' foi a mais dificil de resolver pois os inputs nas divs 'res' pois elas 
esperavam a entrada de dados do usuario e não da uma resposta para ele. Para resolver esse problema tive que: 

 -1° tive que desativar o hidden toda ves que o usuario realiza a ação do onclick no botão.

 -2° Adicionei mais uma caracteristica no input para que o usuario não consiga digitar nada no campo de resposta do programa.

 <h4>Range de porcentagem.</h4>
   No projeto original ele usa um codigo externo para isso funcionar automaticamente, mas eu decidir fazer isso por conta propria.
   Primeiramente eu criei outra função de evento,  <strong> oninput='porcem()'' </strong>'

Essa função acompanha o cursor do usuario para assim ele saiba e decida a porcentagem exata para dar para o garçom.


   

 
