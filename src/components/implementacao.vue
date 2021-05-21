<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-center q-page-sticky-shrink" style="z-index: 1001;"><span></span></div>
     <div class="q-layout-page-container q-layout-transition" style="background: #f8f8f8">
       <main class="q-layout-page default-layout" style="min-height: 100vh;overflow:auto">
         <div style="height:70px;">
           <div style="margin-left:30px; margin-top: 20px">
             <h4 class="bread-title-one">Implementação</h4>
            </div>
         </div>

          <div class="row gutter-sm items-stretch">
            <div class="col-md-6" >
              <div class="q-card" style="width: 100%; height: 100%;">
              <h6 style="margin-left:10px; margin-top: 10px"> Criar Link </h6>
                <div style="padding: 10px">
                  <input type="textf" placeholder="Entre com o link" style="width:100%" id="handleLink"> <br> <br>
                  <textarea id="newLink" cols="80" rows="3" style="width:100%"></textarea> <br>

                  <b-button id="buttonCopyLink"  style="font-family: poppins;font-size: 15px;background:#f60; color:white;border-radius: 15px 15px 15px 15px;border-color:#f60"> Copiar </b-button>
                </div>
              </div>
            </div>

            <div class="col-md-6" >
              <div class="q-card" style="width: 100%; height: 100%;">
                <h6 style="margin-left:10px; margin-top: 10px"> Gerar Link para whatsapp </h6>
                  <div style="padding: 10px">
                  <input type="text" placeholder="Digite o número do whatsapp" style="width:100%" id="handleLinkWhatsApi">
                  <div id="linkApiWhats"> </div>
                </div>
              </div>
            </div>


              <div class="col-md-6" style="margin-top: 30px">
                <div class="q-card" style="width: 100%; height: 100%;">
                  <h6 style="margin-left:10px; margin-top: 10px"> Código Externo Whatsapp </h6>
                    <div style="padding: 10px">

                      <input type="text" placeholder="" style="width:100%" id="handleLinkWhats"> <br> <br>
                      <textarea id="newLinkWhats" cols="80" rows="3" style="width:100%"></textarea> <br><br>
                      <b-button id="buttonCopyWhats" style="font-family: poppins;font-size: 15px;background:#f60; color:white;border-radius: 15px 15px 15px 15px;border-color:#f60; box-shadow: 0px 3px 0 rgba(50, 50, 50, 0.77);;-webkit-box-shadow: 1px 3px 0 rgba(50, 50, 50, 0.77);;-moz-box-shadow: 0px 3px 0 rgba(50, 50, 50, 0.77);;"> Copiar </b-button>
                    <div id="linkApiWhats"> </div>
                  </div>
                </div>
              </div>

            <div class="col-md-6" style="margin-top: 30px">
              <div class="q-card" style="width: 100%; height: 100%;">
                <h6 style="margin-left:10px; margin-top: 10px"> Gerar FAQ Padrão </h6>
                  <div style="padding: 10px">
                    <input type="nnumber" placeholder="Linha de início" style="width:100%" id="linebegin"><br> <br>
                    <textarea id="codefaq" cols="80" rows="3" style="width:100%"></textarea>   <br> <br>
                    <b-button id="buttonCopyfaq"  style="font-family: poppins;font-size: 15px;background:#f60; color:white;border-radius: 15px 15px 15px 15px;border-color:#f60"> Copiar </b-button>
                </div>
              </div>
            </div>
          </div>
            <div class="q-pa-md q-card" style="border: 1px solid #d9d9d9; margin:35px; height:80px">
              <div class="q-pa-md">
                <div class="row">
                  <div class="col-8">
                    <div class="q-gutter-md">
                      <p>Digite o número da linha que você deseja iniciar no fluxo:</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <q-input style="margin-top:-25px" v-model="text" color="orange-9" label="teste"> </q-input>
                     <q-btn color="blue" text-color="black" label="Teste botão" />

                  </div>

                </div>


              </div>
            </div>
       </main>

     </div>

     </div>
     </div>

  <!-- </div> -->

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      ativo: false
    };
  }

};


</script>