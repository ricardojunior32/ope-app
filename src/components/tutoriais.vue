<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-center q-page-sticky-shrink" style="z-index: 1001;"><span></span></div>
     <div class="q-layout-page-container q-layout-transition" style="background: #f8f8f8">
       <main class="q-layout-page default-layout" style="min-height: 100vh;">

         <div style="height:70px;">
           <div style="margin-left:30px; margin-top: 20px">
             <h4 class="bread-title-one">Tutoriais</h4>
            </div>
          </div>
         <div class="row gutter-sm items-stretch" style="">

           <div class="col-xl-3 " >

             <div class="q-card" style="width: 100%; height: 100%;">
              <h6 style="margin-left:10px; margin-top: 10px"> Configurações do chat ao vivo</h6>
              <div class="videoCard">
                 <b-embed type="iframe" style="border: 3px solid gray" src="https://www.youtube.com/embed/T3L72aEOOwI" allowfullscreen> </b-embed>
              </div>

              <div style="padding: 10px">
              <b-button v-b-toggle.collapse style="font-family: poppins;font-size: 15px;background:#f60; color:white;border-radius: 15px 15px 15px 15px;border-color:#f60"> Saiba mais</b-button>
                <b-collapse id="collapse" style="margin-top: 7px">
                  <b-card title="">
                    <p style="margin-left: 10px; font-size: 15px"> Esse vídeo possui as seguintes informações:  <br>
                 <b>Permitir inicialização por Whatsapp:</b> <br>
                  Ativar ou desativar <br> <br>

                  <b> Mensagens de serviço:</b>  <br>
                  Como fazer edição de frases do sistema<br> <br>

                  <b>Opções de Pausa - Away: </b> <br>
                  Personalização das pausas; Away automático <br> <br>

                  <b> Departamentos: </b> <br>
                  Como criar e gerenciar as preferências.<br>
                  Check-in desabilitado e habilitado<br>
                  Fila de atendimento e formas de distribuição<br>

               </p>

                  </b-card>
              </b-collapse>
              </div>


             </div>
           </div>


           <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
             <div class="q-card" style="width: 100%; height: 100%;">
              <h6 style="margin-left:10px; margin-top: 10px"> Operações hat ao vivo</h6>
              <div class="videoCard" >
                 <b-embed style="border: 3px solid gray"  type="iframe" src="https://www.youtube.com/embed/lKo_HAL47h0" allowfullscreen> </b-embed>
              </div>

              <div style="padding: 10px">
              <b-button v-b-toggle.collapse2 style="font-family: poppins;font-size: 15px;background:#f60; color:white;border-radius: 15px 15px 15px 15px;border-color:#f60">Saiba mais</b-button>
                <b-collapse id="collapse2" style="margin-top:7px">
                  <b-card title="">
                    <p style="margin-left: 10px; font-size: 15px"> Esse vídeo possui as seguintes informações: <br>
                  <b> Tela inicial: </b> <br>
                  Como ficar online, offline e away.<br>

                  <b> Atendimentos receptivos: </b><br>
                  Como assumir atendimentos, transferir atendimento, anexar arquivos/imagens, respostas rápidas, inteligência, finalização e arquivamento.<br>

                  <b> Atendimentos ativos: </b><br>
                  Realizar atendimento ativamente por meio do whatsapp ou criação de chats internos entre os colaboradores <br>

                  <b>Configuração de sons:</b><br>
                  Opções de notificação sonora para recebimento de novas conversas e som de mensagens. <br>

                  <b> Dados da conversa:</b><br>
                  Consultar informações desde o início do atendimento do cliente. <br>


               </p>

                  </b-card>
              </b-collapse>
              </div>


             </div>
           </div>

         </div>


          <div>
            <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
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
  },

   data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }]
      }
    },
};
</script>

<style>

</style>