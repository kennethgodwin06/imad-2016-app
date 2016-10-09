//counter code
var couner=0;
var button=document.getElementById('counter');
button.onclick=function (){
  
  
  
  
  
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHtml=counter.toString();
    
};