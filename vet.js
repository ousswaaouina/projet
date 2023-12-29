let btnright=document.getElementById("btnright")
console.log(btnright)
let btnleft=document.getElementById("btnleft")
let mypic=document.getElementById("mypic")
let images=["https://www.depecheveterinaire.com/medias/articles/2022/137147.PNG","https://www.vetoonline.com/wp-content/uploads/2022/07/Phoenix-site-Veto-online.jpg","https://static.vecteezy.com/ti/vecteur-libre/p3/6431616-clinique-veterinaire-pour-animaux-de-compagnie-conception-de-site-web-application-interface-utilisateur-vectoriel.jpg"]
let i=0;
btnright.addEventListener('click', function() {
    if(i<3){
        mypic.src=images[i]
        i++
    }
    else{
        i=0
        mypic.src=images[i]
    }
    
  });
  btnleft.addEventListener('click', function() {
    if(i==0){
        mypic.src=images[i]
        i++
    }
    else{
        mypic.src=images[i]
        i--
    }
    
  });