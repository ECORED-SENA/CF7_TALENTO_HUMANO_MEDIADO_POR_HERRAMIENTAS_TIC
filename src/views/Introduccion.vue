<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i
      h1 Introducción   

    .crd.crd--brad.crd--gris.mb-5      
      .row.justify-content-center.align-items-center        
        .col-auto.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/Introduccion/intro.png", alt="alt").img250.m-auto
        .col-lg 
          p El manual de funciones implica un proceso de verificación de la información producto de la recolección de todos los datos del cargo, es una acción que requiere de la participación activa del nivel estratégico, táctico y operacional. A continuación, se revisarán los elementos fundamentales para la introducción del componente. 
      .dots--btmRight

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3Kn9FT5iVXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
