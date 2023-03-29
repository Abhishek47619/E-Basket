
 let arr = [
     "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3409/1473409-i-d1969d82f6e0",
     "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3981/1463981-i-76197ed0f4b9",
      "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8347/1408347-i-a954f08eff24",
      "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9408/1489408-i-9d991a5f040a"
 ]

 let div = document.getElementById("slidbox1")
 let img = document.createElement("img")
 
let i = 0; 

//slide Show Effect 
function slidShow (){

    if(i==arr.length - 1 ){
        i = 0
    }
    setInterval(function(){
      img.src = arr[i]
      i = i + 1;
      div.append(img)
    },2000)
 }

 slidShow()
