let circulo = document.querySelector(".circulo")
   let imgCopo = document.querySelector(".starbucks")
   let verde = document.querySelector(".verde")
   let amarelo = document.querySelector(".amarelo")
   let rosa = document.querySelector(".rosa")

   verde.addEventListener("click", () => {
       imgCopo.src = "./img/img1.png"
       circulo.style.background = "#017143"
   })

   amarelo.addEventListener("click", () => {
       imgCopo.src = "./img/img2.png"
       circulo.style.background = "#eb7495"
   })

   rosa.addEventListener("click", () => {
       imgCopo.src = "./img/img3.png"
       circulo.style.background = "#d752b1"
   })

   function validarCadastro() {
    // Obtém o valor do campo de e-mail
    var email = document.getElementById('email').value;

    // Verifica se o campo de e-mail está preenchido
    if (email.trim() === '') {
        alert('Por favor, preencha o campo de e-mail.');
        return; // Impede o envio do formulário se o campo estiver vazio
    }

    // Se tudo estiver correto, você pode enviar o formulário ou realizar outras ações
    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar código para enviar os dados para um servidor, por exemplo.
}

