<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-centerq-page-sticky-shrink" style="z-index: 1001;"></div>
     <div class="q-layout-page-container q-layout-transition" style="background: #f8f8f8;">
       <main class="q-layout-page default-layout" style="min-height: 100vh;background: #f8f8f8; position: relative;">
            <div style="height:70px;">
                    <div style="margin-left:30px;margin-top:20px">
                    <h4 class="bread-title-one">Página Inicial</h4>
                    </div>
            </div>
            <q-card>

            </q-card>
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
      ativo: false,

      equipes: [
        'Onboarding', 'Ongoing', 'Suporte Técnico', 'Fechamento Mensal',
      ]

    };
  }
};

</script>


<style>
#chart {
      max-width: 650px;
      margin: 35px auto;
    }
</style>