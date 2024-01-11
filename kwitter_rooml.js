var firebaseConfig = {
      apiKey: "AIzaSyBVS1-KAsdnaGwsyUiBtqGzgtRA8XDBhOM",
      authDomain: "kwitter-ee5f1.firebaseapp.com",
      databaseURL: "https://kwitter-ee5f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-ee5f1",
      storageBucket: "kwitter-ee5f1.appspot.com",
      messagingSenderId: "769919811024",
      appId: "1:769919811024:web:8b226b7f282c891af9cdd5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
