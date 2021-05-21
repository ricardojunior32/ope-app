<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-center q-page-sticky-shrink" style="z-index: 1001;"><span></span></div>
     <div class="q-layout-page-container q-layout-transition" style="background: #f8f8f8">

       <main class="q-layout-page default-layout" style="min-height: 100vh;">
         <div style="height:70px;">
           <div style="margin-left:30px; margin-top: 20px">
             <h4 class="bread-title-one">Planilhas</h4>
            </div>
          </div>

         <div class="row gutter-sm items-stretch" style="">
            <!-- Planilhas de clientes -->
           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" >
             <!-- Título -->
             <div class="row items-center">
               <!--<img src="../assets/sheets_colorido_48.png" style="width:25px;height:25px" alt="">-->
               <div class="default title" style="font-size: 22px; padding-left: 5px; padding-top: 8px; font-weight: 300;">
                 Planilha de clientes
               </div>

             </div>
              <!-- Conteúdo -->
             <div class="row" style="padding-right:5px;padding-bottom: 10px">
               <div class="q-card" style="width: 100%; height: 100%;">
                <div style="padding: 10px">
                  <q-expansion-item v-model="expanded" label="Planilhas com informações de clientes" caption="">
                    <!-- Collapse -->
                    <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>Usuários e senhas (Data: 06/01) </div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados todos os usuários e senhas "Master" de cada cliente.</div>
                            <div class="" style="padding:13px; color: gray; font-size:13px; margin-top:-15px"> <b> Observação: </b> Em breve esses usuários serão desativados e utilizaremos somente as contas de empregado. Caso sua conta (Email e senha Globalbot) não estejam com permissões elevadas, favor contate o suporte em: suporte@globalbot.com.br</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>
                      <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>[2021] Whatsapp WABA API Oficial </div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados todos os clientes que utilizam a API Oficial do whatsapp e seus respectivos números.</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>
                      <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>[2021] Whatsapp API Globalbot </div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados todos os clientes que utilizam a API Globalbot do whatsapp e seus respectivos números.</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>
                  </q-expansion-item>
                </div>
              </div>
             </div>

           </div>

            <!-- Planilhas Internas  -->
           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12" >
             <!-- Título -->
             <div class="row items-center">
               <!--<img src="../assets/sheets_colorido_48.png" style="width:25px;height:25px" alt="">-->
               <div class="default title" style="font-size: 22px; padding-left: 5px; padding-top: 8px; font-weight: 300;">
                 Planilhas internas
               </div>

             </div>
              <!-- Conteúdo -->
             <div class="row" style="padding-right:5px;padding-bottom: 10px">
               <div class="q-card" style="width: 100%; height: 100%;">
                <div style="padding: 10px">
                  <q-expansion-item v-model="expanded" label="Planilhas com informações de clientes" caption="">
                    <!-- Collapse -->
                      <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>Mailing Globalbot</div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados e-mails de clientes que entraram em contato com a Globalbot e tiveram seus e-mails mapeados e vinculados às empresas cadastradas na globalbot. OBS: Alguns clientes entram em contato por meio de e-mails sem domínio.</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>
                      <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>[2021] Gestão da Base </div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados todos as informações dos clientes de nossa base. Como: ISM e CSM, tipo de chatbot, tipo de onboarding, versão da plataforma, se há integração ou não e demais dados.</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>
                      <!-- Planilha -->
                      <q-card class="my-card" flat bordered style="margin-top: 10px">
                        <q-card-section horizontal>
                          <q-card style="width: 90%">
                            <div class="defaut-title item-center" style="padding:13px"> <b> Planilha: </b>CRM em números </div>
                            <div class="" style="padding:13px; margin-top:-15px"> <b> Descrição: </b> Nesta planilha estão cadastrados todos os números das equipes de.</div>
                            <div class="" style="padding:13px; color: gray; font-size:13px; margin-top:-15px"> <b> Observação: </b> Esses dados estão representados no gráfico abaixo</div>
                          </q-card>
                          <q-card-actions vertical class="justify-around q-px-md">
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="exit_to_app">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Abrir Planilha
                              </q-tooltip>
                            </q-btn>
                            <q-btn flat class="q-btn inline relative-position q-btn-item q-btn-flat q-focusable q-hoverable text-primary" round color="orange-9" icon="content_copy">
                              <q-tooltip content-class="bg-orange-9" anchor="top middle">
                                Copiar link
                              </q-tooltip>
                            </q-btn>
                          </q-card-actions>
                        </q-card-section>
                      </q-card>

                  </q-expansion-item>
                </div>
              </div>
             </div>

           </div>

            <!-- Gráfico -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <q-card>
                <div class="default-title" style="font-size: 22px; padding: 15px; font-weight: 300;"> CRM em números </div>
              <div class="example" style="height:40vh">
                <apexchart width="100%" height="100%"  type="area" :options="chartOptions" :series="series"></apexchart>
              </div>
            </q-card>
            </div>
            <!-- Selecionar Setor -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top:10px">
                <q-card>
                  <q-select v-model="chooseTeam"
                  :options="equipes"
                  @input="newGraph"
                  label="Direcionamento de dados"
                  color="orange-9"
                  style="margin-left:5px; margin-right:5px; margin-bottom:10px"/>
                </q-card>
            </div>
            <!-- Tabela -->
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <q-card style="margin-top:10px">
                <table class="q-table q-table-horizontal-separator">
                  <thead>
                    <td class="q-table-col-auto-width"></td>
                    <th class="text-left"></th>
                    <th class="text-center" style="background: rgb(240, 240, 240);">
                      <b> Responsáveis </b>
                    </th>
                    <th class="text-center">
                      <b> Exemple </b>
                    </th>
                     <th class="text-center">
                      <b> Exemple </b>
                    </th>
                     <th class="text-center">
                      <b> Exemple </b>
                    </th>
                     <th class="text-center">
                      <b> Exemple </b>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="q-table-col-auto-width"></td>
                      <td class="text-left"></td>
                      <td class="text-center" style="background: rgb(240, 240, 240);"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                    <tr>
                      <td class="q-table-col-auto-width"></td>
                      <td class="text-left"></td>
                      <td class="text-center" style="background: rgb(240, 240, 240);"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                    <tr>
                      <td class="q-table-col-auto-width"></td>
                      <td class="text-left"></td>
                      <td class="text-center" style="background: rgb(240, 240, 240);"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                    <tr>
                      <td class="q-table-col-auto-width"></td>
                      <td class="text-left"></td>
                      <td class="text-center" style="background: rgb(240, 240, 240);"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                    <tr>
                      <td class="q-table-col-auto-width"></td>
                      <td class="text-left"></td>
                      <td class="text-center" style="background: rgb(240, 240, 240);"></td>
                      <td class="text-center"></td>
                      <td class="text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </q-card>
            </div>
         </div>
       </main>
     </div>

     </div>
     </div>

  <!-- </div> -->

</template>

<script>
    let sem1Sup = 73;
    let sem2Sup = 57;
    let sem3Sup = 46;
    let sem4Sup = 77;
    const totalMesSup = (sem1Sup + sem2Sup + sem3Sup + sem4Sup);
    let sem1OnB = 57;
    let sem2OnB = 55;
    let sem3OnB = 58;
    let sem4OnB = 60;
    const totalMesOnB = (sem1OnB + sem2OnB + sem3OnB + sem4OnB);
    let sem1OnG = 100;
    let sem2OnG = 141;
    let sem3OnG = 120;
    let sem4OnG = 110;
    const totalMesOnG = (sem1OnG + sem2OnG + sem3OnG + sem4OnG);
export default {
  name: 'App',
  data() {
    return {
      ativo: false
    };
  },

  name: 'CRM',
  data: function() {
    return {

      chartOptions: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["1 Semana", "2 Semana", "3 Semana", "4 Semana"],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topRight'
            }
        }
      }
      ,
      series: [
      {
        name: 'Suporte',
        data: [(sem1Sup), (sem2Sup), (sem3Sup), (sem4Sup)]
      },
      {
        name: 'Onboarding',
        data: [(sem1OnG),(sem2OnG),(sem3OnG),(sem4OnG)]
      },
      {
        name:'Ongoing',
        data: [(sem1OnB),(sem2OnB),(sem3OnB),(sem4OnB)]
      },

      ],
      chooseTeam: null,
      equipes: [
        'Onboarding', 'Ongoing', 'Suporte Técnico', 'Fechamento Mensal',
      ]
    };


  },

  methods: {
    newGraph (){

    }
  }

};


</script>