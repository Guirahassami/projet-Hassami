let listDesBoutonParcourir=[]
let listChoisiParOrdi = []
let premierefois = true
let level=1;
const jouerSong = (bouttonAppuyer) =>{
   
    switch(bouttonAppuyer){
       case "vert":
          const audio1=new Audio("/songs/vert.mp3");
           audio1.play();
          break
        case "rouge":
          const audio2=new Audio("/songs/rouge.mp3");
           audio2.play();
          break
        case "jaune":
            const audio3=new Audio("/songs/jaune.mp3");
            audio3.play();
            break
        case "bleu":
            const audio4=new Audio("/songs/bleu.mp3");
            audio4.play();
            break 
    } 
}
      const animerBoutton = (bouttonAppuyer)=>{
      const buttonActif = document.querySelector("."+bouttonAppuyer)
      console.log( buttonActif)
      buttonActif.classList.add("appuyer")
      setTimeout(function(){
         buttonActif.classList.remove("appuyer")
      },100)
  }
  
const flash = ()=>{
    let aleatoire = Math.floor((Math.random()*4))
    let buttonsuivant=document.querySelectorAll(".boutton")[aleatoire]
    const nouvelleCouleur = buttonsuivant.classList[0]
    listChoisiParOrdi.push(nouvelleCouleur) 
    buttonsuivant.classList.add("appuyer")  
    console.log(buttonsuivant)
    setTimeout(function(){
        buttonsuivant.classList.remove("appuyer")
    },100)

 }
 const animer =()=>{
    document.querySelector(".debut").classList.add("erreur")  
    setTimeout(function(){
        document.querySelector(".debut").classList.remove("erreur")
    },200)
 }


document.addEventListener("keydown",function(evenement){
    console.log(evenement.key)
    // pour le flash lorsqu'on appui sur le boutton c'est juste pour debuter le jeu apres ca on ne dois plus avoir de flash 
    // tu peux tout simplement avoir un boolean au debut tu initialise ca comme faux
    // apres le premier flash tu mets ca comme vrai et tu peux utilise if a partir de la pour determiner si le clavier a ete deja touche ou pas
    if(premierefois){
        flash()
        premierefois =false
    }
})


let listeBoutton = document.querySelectorAll(".boutton")
for(let i = 0; i < listeBoutton.length; i++){
    document.querySelectorAll(".boutton")[i].addEventListener("click",function(){
          let CouleurBoutton =this.classList[0]
          jouerSong(CouleurBoutton)
          animerBoutton(CouleurBoutton)
          listDesBoutonParcourir.push(CouleurBoutton)
          appyer(listDesBoutonParcourir)
    })
 }
 
const appyer =()=>{
   console.log(listChoisiParOrdi)
    console.log(listDesBoutonParcourir)
    for(let i = 0; i <listDesBoutonParcourir.length; i++){
        if (listChoisiParOrdi[i] !== listDesBoutonParcourir[i]){
            const incorrect=new Audio("/songs/incorrect.mp3");
            incorrect.play();
            animer()
            document.querySelector("h1").innerHTML="vous avez echouer recommencer"
            listDesBoutonParcourir = [] 
            listChoisiParOrdi = []
            premierefois=true
            level=1
            return
        }
        
    }
    
    if (listChoisiParOrdi.length === listDesBoutonParcourir.length){
        document.querySelector("h1").innerHTML="level "+level
        listDesBoutonParcourir = []
        setTimeout(function(){
            flash()
        },300)
        level++
    }
}
