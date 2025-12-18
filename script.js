gsap.registerPlugin(ScrollTrigger);

// Parallax 1 (zoom na imagem "future")
gsap.to(".future", {
    scale: 15,
    scrollTrigger: {
        trigger: ".parallax-zoom",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true // mantém fixo até acabar o efeito
    }

}
);


// Criando uma timeline GSAP que vai reagir ao scroll
gsap.timeline({
    scrollTrigger:{              // Configuração do ScrollTrigger
      trigger:'.scrollDist',     // Elemento que dispara o scroll
      start:'550 -80',               // Início: topo do elemento no topo da viewport
      end:'100% 100%',           // Fim: final do elemento no final da viewport
      scrub:5                    // Faz a animação seguir o scroll de forma suave (1 segundo de interpolação)
    }
  })
  
  // Para cada elemento, define a animação de Y (vertical)
  .fromTo('.sky', {y:0},{y: -100}, 0)         // Move o céu de y=0 para y=100px
  .fromTo('.cloud1', {y:300},{y:-200}, 0)    // Move a nuvem 1 de y=50 para y=-400px
  .fromTo('.cloud2', {y:300},{y:-600}, 0)  // Move a nuvem 2 de y=-150 para y=-500px
  .fromTo('.cloud3', {y:300},{y:-300}, 0)   // Move a nuvem 3 de y=-50 para y=-650px
  .fromTo('.mountBg', {y:300},{y:-80}, 0)  // Move a montanha de fundo de y=-10 para y=-100px
  .fromTo('.mountMg', {y:300},{y:-80}, 0)  // Move a montanha do meio de y=-30 para y=-250px
  .fromTo('.mountFg', {y:300},{y:-80}, 0)  // Move a montanha da frente de y=-50 para y=-600px
  .fromTo('.texto-montanha', {y:-50}, {y:290}, 0)

  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");

  });
