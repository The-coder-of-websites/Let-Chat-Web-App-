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
   room_name=localStorage.getItem("room_name");

   function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value=" ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name1 =message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;


      } });  }); }
getData();


function updateLike(message_id){
console.log("Clicked on the like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
update_likes=Number(likes)+1;
console.log(update_likes);

firebase.database().ref(room_name).child(message_id).update({
      like:update_likes
});

}

function logout(){
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location="index.html";
}