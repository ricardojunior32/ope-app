<template>

  <div id="q-app">
     <div  class="q-layout">
     <div  class="q-page-sticky q-layout-transition row flex-center q-page-sticky-shrink" style="z-index: 1001;"><span></span></div>
     <div class="menuLateral" style="top: 0px; padding-top: 16px;">
        <!-- Home -->
        <div class="menuLateral-item">
        <router-link to="/">
          <div id="sideMenuN" class="sidenav">
            <a href="#" id="telaInicial"> Tela Inicial </a>
          </div>

        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class=" fal fa-signal-alt">
            <img src="./assets/home_48.png" style="width: 30px;">
          </i>
        </div>
        </router-link>
      </div>

      <!-- Planilhas -->
      <div class="menuLateral-item">
        <router-link to="/planilhas">
          <div id="sideMenu" class="sidenav">
            <a href="#" id="telaInicial"> Planilhas </a>
          </div>

        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
        <i aria-hidden="true" class="fal fa-signal-alt">
            <img src="./assets/sheets_48.png" style="width: 30px;"></i>
        </div>
        </router-link>
      </div>
      <!-- Tutoriais -->
      <div class="menuLateral-item" >
        <router-link to="/tutoriais">
          <div id="sideMenu" class="sidenav">
            <a href="#" id="telaInicial"> Tutoriais </a>
          </div>

        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary"><i aria-hidden="true" class="fal fa-signal-alt">
            <img src="./assets/tutorial_48.png" style="width: 30px;"></i>
        </div>
        </router-link>
      </div>

      <!-- Trello -->
      <div class="menuLateral-item" >
        <div id="sideMenu" class="sidenav">
          <a href="https://trello.com/b/iQ2XS2cO/implementa%C3%A7%C3%A3o-de-projetos" target="_blank" id="telaInicial"> Trello </a>
        </div>
        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class="fal fa-signal-alt">
          <img src="./assets/trello_48.png" style="width: 30px;"></i>
        </div>
      </div>

      <!-- Agenda -->
      <div class="menuLateral-item" >
        <div id="sideMenu" class="sidenav">
          <a href="https://calendar.google.com/calendar/u/2/r/day" target="_blank" id="telaInicial"> Agenda </a>
        </div>
        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary ">
          <i aria-hidden="true" class="fal fa-signal-alt">
          <img src="./assets/agenda_48.png" style="width: 30px;"></i>
        </div>
      </div>

      <!-- Implementação -->
      <div class="menuLateral-item" >
        <router-link to="/implementacao">
          <div id="sideMenu" class="sidenav">
            <a href="https://trello.com/b/iQ2XS2cO/implementa%C3%A7%C3%A3o-de-projetos" targe="_blank" id="telaInicial"> Implementação </a>
          </div>

        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class="fal fa-signal-alt">
          <img src="./assets/document_edit_48.png" style="width: 30px;"></i>
        </div>
        </router-link>
      </div>

      <!-- Wiki -->
      <div class="menuLateral-item" >
        <router-link to="/wiki">
        <div id="sideMenu" class="sidenav">
          <a href="#" id="telaInicial"> Wiki Globalbot </a>
        </div>

        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class="fal fa-signal-alt">
          <img src="./assets/wiki_48.png" style="width: 30px;"></i>
        </div>
        </router-link>
      </div>

      <!-- Paineis -->
      <div class="menuLateral-item" >
        <div id="sideMenu" class="sidenav">
          <a href="https://panel.globalbot.ai/#/login" target="_blank" id="telaInicial"> Painel Stable   </a>
        </div>
        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class="fal fa-signal-alt">
          <img src="./assets/login_48.png" style="width: 30px;"></i>
        </div>
      </div>

      <!-- Freshdesk -->
      <div class="menuLateral-item" >
        <div id="sideMenu" class="sidenav">
          <a href="https://globalbot.freshdesk.com/a/dashboard/default" target="_blank" id="telaInicial"> Painel Suporte </a>
        </div>
        <div class="row justify-center items-center menuLateral-item-icon menuLateral-item-primary">
          <i aria-hidden="true" class=" fal fa-signal-alt">
          <img src="./assets/agent_48.png" style="width: 30px;"></i>
        </div>
      </div>

     </div>
     <div class="q-layout-page-container q-layout-transition" style="margin-left: 80px; background: #f8f8f8">
       <main class="q-layout-page default-layout" style="min-height: 100vh;">
         <router-view/>
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

<style>
/*----------- Menus -----------*/
.menuLateral{
width: 80px;
position: fixed;
z-index: 1002;
background: #333;
height: 100%;
color: #fff;
}

.menuLateral-item{
cursor: pointer;
opacity: 1;

margin-top: 8px;
}

.menuLateral-item-primary{
    background: #f60;
}

.menuLateral-item-icon{
width: 80px;
height: 50px;
z-index: 1;
background: #333;
-webkit-transition: background .5s,-webkit-transform 1s;
transition: background .5s,-webkit-transform 1s;
transition: background .5s,transform 1s;
transition: background .5s,transform 1s,-webkit-transform 1s;
}

.menuWiki-item{
  cursor: pointer;
  opacity: 1;
  width: 80px;
  height: 49px;
  z-index: 1;
  background: #f60;
  font-family: poppins;
  font-size: 15px;
  font-weight: bold;
  display: inline-block;
  margin-inline: 10px;
  text-align: center;
  padding:13px 0 15px 0;

}

#sideMenu a{
  display: none;
  position: absolute;
  left: -100px;
  transition: 0.5s;
  padding: 15px;
  width: 225px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
  text-align: right;
  white-space: nowrap;
  background: #f60;
  opacity:1;
  font-family: poppins;
  font-size: 17px;

}

#sideMenuN a{
    white-space: nowrap;
    z-index: -1;
    width: 225px;
    position: absolute;
    height: 50px;
    margin-left: -100px;
    background: #f60;
    color: #fff;
    opacity: 0;
    text-align: right;
    border-radius: 0 3px 3px 0;
    padding-right: 18px;
    padding-top: 12px;
    -webkit-transition: margin-left .5s,opacity .5s,-webkit-transform 1s;
    transition: margin-left .5s,opacity .5s,-webkit-transform 1s;
    transition-property: margin-left, opacity, transform, -webkit-transform;
    transition-duration: 0.5s, 0.5s, 1s, 1s;
    transition-timing-function: ease, ease, ease, ease;
    transition-delay: 0s, 0s, 0s, 0s;
    transition: margin-left .5s,opacity .5s,transform 1s;
    transition: margin-left .5s,opacity .5s,transform 1s,-webkit-transform 1s;
}

/*----------- Hovers -----------*/
.menuLateral-item:hover #sideMenu a{
  display: block;
  position: absolute;
  margin-left: 80px;
  z-index: -1;
  padding: 12px;
  transition: 0.5s;

}

#sideMenu a:hover{
  left: 0;
}

.menuLateral-item-icon:hover{
  background: #f60;
  transition: 0.5;
}

.menuWiki-item:hover{
  background: #dadada69;
  color:white ;
  position: relative;
  border-radius: 20px;
}

/* ----------- Fim Hovers -----------*/

textarea {
    display: block;
    margin-top: 30px;
}

.foot_insights{
  background: black;
  position: absolute;
  width: 95%;
  height: 25vh;
  margin-left: 20px;
  margin-bottom: 20px ;
  bottom: 0;

}

.mainWiki{
  background: #f8f8f8;
  width: 98%;
  height: 90vh;
  position: absolute;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: -15px;
}

.conteudoWiki{
  background: black;
  width: 100%;
  height: 100vh;
  margin-top:2%;

}

.menuWiki{
  background: #f60;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  position: absolute;

}

.wiki-buttons-label{
  background: #f60;
  width: 98%;
  height: 47px;
  margin-left:2vh;
  margin-right: 2vh;
  margin-top: 1px;
  position: absolute;
  display: inline-block;
}

.botaoWiki{
  background: #f60;
  width: 80px;
  height: 48px;
  margin-left: 4px;
  margin-right: 4px;
  background: white;
  border-radius: 20px;
  display: inline-block;
  margin: 0 auto;
}

.item-blog{
  display: table;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
}

.insights{
  background: black;

}

.col-custom-5{
  -webkit-box-flex: 0;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    max-width: 15%;
    padding-left: 15px;
    padding-right: 15px;
}

.q-card{
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  vertical-align: top;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: poppins;
  font-size: 15px;

}

.gutter-sm{
  margin-top: -16px;
  margin-left: 20px;
  margin-right: 20px;
}

.items-strech{
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.gutter-sm2{
  margin-top: -16px;
  margin-left: 20px;
}

.items-strech2{
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.videoCard{
  padding: 10px;
  border: 1px;
}

h4{
  font-size: 34px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: normal;
  display: block;
  margin-block-start: 1.33cm;
  margin-block-end: 1.33cm;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.bread-title-one{
  font-size: 30px;
  font-weight: 200;
  margin: 0px 5px 0px 0px;

}

.fa-signal-alt::before{
  content: "";
}

i::after, ::before{
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
}



#telaInicial{
  background-color: #f60;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

a {
    color: #0060B6;
    text-decoration: none;

}


a.fill-div {
    text-align: center;
    display: block;
    height: 120%;
    width: 100%;
    text-decoration: none;
}

body {
    font-family: Poppins,sans-serif;
    letter-spacing: -.24px!important;
    -webkit-font-smoothing: antialiased!important;
    min-width: 100px;
    font-family: Roboto,-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: black;
    color: #0c0c0c;
    min-height: 100vh;
}

div {
    display: block;

}

#q-app, body, html {
    width: 100%;
    direction: ltr;
}

.q-layout {
    width: 100%;
    min-height: 100vh;
}

.q-layout, .q-layout-footer, .q-layout-header, .q-layout-page {
    position: relative;
}

.q-layout {
    background-color: #f8f8f8;
}



.items-center{
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
}

.justify-center{
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
}

.row{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}
.vertical-line{
    padding: 10px 10px 10px 30px;
    border-left-width: 1px;
    border-left-style: solid;
    margin-left: -6px;
    margin-top: 20px;
    margin-right: -35px;
}
</style>
