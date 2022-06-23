var quill = new Quill('#editor', {
    theme: 'bubble'
 });

 function choose(){
  var dia = document.getElementById('dialog');
  dia.style.display = 'block';
 }
 function text(){
  var dia = document.getElementById('text');
  dia.style.display = 'block';
  var dia1 = document.getElementById('img');
  dia1.style.display = 'none';
 }
 function img(){
  var dia = document.getElementById('img');
  dia.style.display = 'block';
  var dia1 = document.getElementById('text');
  dia1.style.display = 'none';
 }
 
 let input = document.getElementById("inputTag");
 input.addEventListener("change", (event)=>{
      var tmppath = URL.createObjectURL(event.target.files[0]);
      
        let outer = document.getElementById("outer");
        outer.innerHTML += "<div class='one'><img class='img1' src="+tmppath+"></div>"
   }
 )
 
 function abc(){
   var val = document.getElementsByClassName('ql-editor') ;
    let outer = document.getElementById("outer");
    outer.innerHTML += "<div class='box'>"+val[0].innerHTML+"</div>"
 }