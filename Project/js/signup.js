// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyBiss9b9W_F-vlcReB47Nt32v-gjy54_q4",
    authDomain: "traning-project-805.firebaseapp.com",
    databaseURL: "https://traning-project-805.firebaseio.com",
    projectId: "traning-project-805",
    storageBucket: "traning-project-805.appspot.com",
    messagingSenderId: "107969272663",
    appId: "1:107969272663:web:b31adf125edcb7f7"
  };
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var signupRef = firebase.database().ref('signup');

// Listen for form submit
document.getElementById('signupForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var userName = getInputVal('userName');
  var pass = getInputVal('pass');
  var accountType = getInputVal('accountType');

  // Save message
  saveSignup(name, email, userName, pass,accountType);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('signupForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveSignup(name, email, userName, pass,accountType){
  var newSignupRef = signupRef.push();
  newSignupRef.set({
    name: name,
    email:email,
    userName:userName,
    pass:pass,
	accountType:accountType
  });
}