
//ADICIONE SEU LINK DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCNEWrQMxE4s8sNZZ52v6DU7ZAL98RQMr4",
  authDomain: "banco-de-dados-6151f.firebaseapp.com",
  databaseURL: "https://banco-de-dados-6151f-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados-6151f",
  storageBucket: "banco-de-dados-6151f.appspot.com",
  messagingSenderId: "940818182987",
  appId: "1:940818182987:web:28c6a18c0d8dafb5a8aece"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
}

var campo ='';

database.ref("/").on("value",(data)=>{
  campo ='';
  data.forEach((subpasta)=>{
    sala = subpasta.key;
    linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
    campo +=linha;
  });
  document.getElementById("output").innerHTML = campo;
})


//programe a função irSala para trocar de sala


//apaga o nome do usuário
function logout() { 
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}