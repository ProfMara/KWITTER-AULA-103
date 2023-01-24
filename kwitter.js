
//ADICIONE SEUS LINKS FIREBASE
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

//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

