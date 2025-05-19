let xCarros = [1000,-200,-190 , 1000,1000,1000];

let yCarros = [400,340,280,200,130,60]

let vxCarros = [-10,7,6,-5,-8,-10] 

let cCarros = [100,100,100,90,100,70]
 
let aCarros = [70,70,70,70,70,70]

function carros(){
  for(let i = 0;i < imagemCarros.length; i++){ 
image(imagemCarros[i],xCarros[i],yCarros[i],cCarros[i],aCarros[i])}

}

function movimentaCarros(){
  for(let i = 0;i < imagemCarros.length; i++) 
  {xCarros[i] += vxCarros[i]}
}

function loopDosCarros(){
  if(xCarros[0] < -200) 
   {xCarros[0] = 1000}
  if (xCarros[3] < -200)
   {xCarros[3]= 1000}
   if(xCarros[4] < -200) 
   {xCarros[4] = 1000}
  if (xCarros[5] < -200)
   {xCarros[5] = 1000}
  
  if (xCarros[1] > 1000)
    {xCarros[1] = -200}
  if (xCarros[2] > 1000)
    {xCarros[2] = -200}
}