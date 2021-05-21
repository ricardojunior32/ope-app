
<template>
   <div class="container" id="firebaseui-auth-container">

      <main role="main" >

          <div class="card border" style=" width: 350px; position: absolute;top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: 1px 5px 30px rgb(195, 195, 195); " >

            <div class="card-body">

                <div class=" centered">
                  <img alt="Responsive image" class="img-card-user mx-auto d-block img-fluid" src="imagens/COFIP.png">
                </div>

                <div class="centered" style="padding-top:15px;">
                  <div class="form-group">
                    <label> E-mail </label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu Email">
                    <br>
                  

                  <label> Senha </label>
                  <input type="password" class="form-control" id="inputPassword" placeholder="Digite sua Senha">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6" id="btnLogin">
                      <button class="btn btn-dark btn-block form-control float-left"> Entrar </button>
                  </div> 

                  <div class="form-group col-md-6" id="btnCad">
                    <a href="cadastroNovo.html" class="btn btn-dark btn-block form-control float-left"> Cadastrar-se </a>
                  </div>  
                
                </div>

              </div>
              <div class="form-group">
                <div class="col-md-6 align-self-center" style="margin-left: 28%;">
                  <a href="novaSenha.html"> Redefinir Senha </a> 
                </div>
             
              </div>
              
            </div>

          </div>
      </main>
    </div> 
</template>