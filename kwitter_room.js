// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCuwEgal1eFzR9HikdYN6verU4C9R7ykIc",
    authDomain: "kwitter-project-9594b.firebaseapp.com",
    projectId: "kwitter-project-9594b",
    storageBucket: "kwitter-project-9594b.appspot.com",
    messagingSenderId: "780149276413",
    appId: "1:780149276413:web:a9a86518ff1c9e29340894"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "New Room added"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";

//End code
});});}
getData();

function rediectToRoomName(name){
    localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

