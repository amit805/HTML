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
var bookRef = firebase.database().ref('bookings');

// Listen for form submit
document.getElementById('bookForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var mobile = getInputVal('mobile');
  var email = getInputVal('email');
  var arrival = getInputVal('arrival');
  var departure = getInputVal('departure');
  var roomType = getInputVal('roomType');
  var payment = getInputVal('payment');

  // Save message
  saveBook(name, mobile, email, arrival, departure, roomType, payment);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('bookForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveBook(name, mobile, email, arrival, departure, roomType, payment){
  var newBookRef = bookRef.push();
  newBookRef.set({
    name: name,
	mobile:mobile,
    email:email,
    arrival:arrival,
    departure:departure,
	roomType:roomType,
	payment:payment
  });
}