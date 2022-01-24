var firebaseConfig = {
    apiKey: "AIzaSyDpFCVYijn--2EW192ZzEdWMuHWlSTxiko",
    authDomain: "kwitter-project-61b83.firebaseapp.com",
    databaseURL: "https://kwitter-project-61b83-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-61b83",
    storageBucket: "kwitter-project-61b83.appspot.com",
    messagingSenderId: "688101635919",
    appId: "1:688101635919:web:ec6f602de89019c90e373a"
  };

  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!";

   function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
       purpose: "add room"
      });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
    }

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
       console.log("Room name- "+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
      
      });});}
      getData();

     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
