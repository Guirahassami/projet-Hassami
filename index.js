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
             case "bleu ":
             const audio4=new Audio("/songs/bleu.mp3");
              audio4.play();
                break 
            } }
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
   let t= buttonsuivant.classList.add("appuyer")  
  console.log(buttonsuivant)
      setTimeout(function(){
      buttonsuivant.classList.remove("appuyer")
    },100)

 }

document.addEventListener("keydown",function(evenement){
   console.log(evenement.key)
   flash()
})
    const listDesBoutonParcourir=[]
        let listeBoutton = document.querySelectorAll(".boutton")
for(let i = 0; i < listeBoutton.length; i++){
    document.querySelectorAll(".boutton")[i].addEventListener("click",function(){
          let CouleurBoutton =this.classList[0]
          jouerSong(CouleurBoutton)
          animerBoutton(CouleurBoutton)
          listDesBoutonParcourir.push(CouleurBoutton)
           appyer(listDesBoutonParcourir) 
           flash()
    })
 }
  
  let v=document.querySelectorAll(".boutton")[0].classList[0]
  let r=document.querySelectorAll(".boutton")[1].classList[0]
  let j=document.querySelectorAll(".boutton")[2].classList[0]
  let b=document.querySelectorAll(".boutton")[3].classList[0]
  let list=[v,r,j,b]


const appyer = (ordre)=>{
   
    for(let i = 0; i <ordre.length; i++){
//      document.querySelectorAll(".boutton")[i].addEventListener("click",function(){
//       let Couleur=this.classList[0]
//        list.push(Couleur)
//          console.log(list[i])
//          console.log(ordre[i])
//    if(list[i]===ordre[i]){
//       flash()
//    }
//  })
 } 
}
