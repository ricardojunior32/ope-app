<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-center q-page-sticky-shrink" style="z-index: 1001;"><span></span></div>
     <div class="q-layout-page-container q-layout-transition" style="background: #f8f8f8">
       <main class="q-layout-page default-layout" style="min-height: 100vh; max-width: 200vh">
          <div style="height:70px;">
           <div style="margin-left:20px; margin-top: 10px">
             <h4 class="bread-title-one">Wiki Globalbot <img src="https://globalbot.com.br/assets/images/favicon/favicon-96x96.png" style="width:30px; margin-top:"> </h4>

           </div>
          </div>
          <div class="mainWiki">
            <div class="menuWiki">
              <div class="wiki-buttons-label">
                <div class="menuWiki-item">
                   EXEMPLO 1
                </div>
                <div class="menuWiki-item">
                   Exemplo 2
                </div>
                <div class="menuWiki-item">
                   Exemplo 3
                </div>
                <div class="menuWiki-item">
                  Exemplo 4
                </div>

                <h1>teste</h1>

              </div>
            </div>
            <!--Conteudo Wiki -->
            <div class="conteudoWiki">
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