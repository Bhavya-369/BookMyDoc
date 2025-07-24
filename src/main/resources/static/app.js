// Simulate login status (false = not logged in)
let isLoggedIn = false;

// Doctors data
const doctors = {
  hyderabad: [
    {
      name: "Dr. Anil Kumar",
      specialization: "Cardiologist",
      experience: "10 yrs",
      fee: "₹500",
      area: "Banjara Hills",
      img: "https://i.pravatar.cc/60?img=1"
    },
    {
      name: "Dr. Priya Reddy",
      specialization: "Dermatologist",
      experience: "8 yrs",
      fee: "₹400",
      area: "Hitech City",
      img: "https://i.pravatar.cc/60?img=2"
    }
  ],
  mumbai: [
    {
      name: "Dr. Raj Sharma",
      specialization: "Orthopedic",
      experience: "12 yrs",
      fee: "₹600",
      area: "Andheri",
      img: "https://i.pravatar.cc/60?img=3"
    },
    {
      name: "Dr. Neha Desai",
      specialization: "Pediatrician",
      experience: "6 yrs",
      fee: "₹450",
      area: "Bandra",
      img: "https://i.pravatar.cc/60?img=4"
    }
  ],
  delhi: [
    {
      name: "Dr. Mohit Verma",
      specialization: "ENT Specialist",
      experience: "9 yrs",
      fee: "₹550",
      area: "Karol Bagh",
      img: "https://i.pravatar.cc/60?img=5"
    },
    {
      name: "Dr. Aarti Sharma",
      specialization: "Gynecologist",
      experience: "7 yrs",
      fee: "₹500",
      area: "Connaught Place",
      img: "https://i.pravatar.cc/60?img=6"
    }
  ]
};

// Function to update doctor list
function showDoctors() {
  const city = document.getElementById('citySelect').value;
  const doctorListDiv = document.getElementById('doctorList');
  
  if (!city || !doctors[city]) {
    doctorListDiv.innerHTML = "<h2>Select a city to see doctors</h2>";
    return;
  }

  let html = `<h2>Doctors in ${city.charAt(0).toUpperCase() + city.slice(1)}</h2>`;
  
  doctors[city].forEach((doc, index) => {
    html += `
      <div class="doctor-card" id="doctor-${city}-${index}">
        <div class="doctor-info">
          <img src="${doc.img}" alt="Doctor" class="doctor-img">
          <div class="doctor-details">
            <h4>${doc.name}</h4>
            <p>${doc.specialization}</p>
            <p>${doc.experience}</p>
            <p>₹${doc.fee}</p>
            <p>${doc.area}</p>
          </div>
        </div>
        <button class="btn btn-primary" onclick="openBookingModal('${city}', ${index})">Book Appointment</button>
      </div>
    `;
  });

  doctorListDiv.innerHTML = html;
}

// Event listener for city select dropdown
document.getElementById('citySelect').addEventListener('change', showDoctors);

// Function to open the booking modal
function openBookingModal(city, index) {
  if (!isLoggedIn) {
    alert("Please login to book an appointment.");
    showLoginModal(); // This should call the showLoginModal function here
    return;
  }
  
  const doctor = doctors[city][index];
  
  // Set the doctor's name in the booking modal
  const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
  bookingModal.show();
  document.getElementById('bookingModalLabel').innerHTML = `Book Appointment with ${doctor.name}`;
}

// Function to show the login modal
function showLoginModal() {
  var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
  myModal.show();
}

// Function to handle login (mockup for now)
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate login
  if (username === "admin" && password === "admin") {
    isLoggedIn = true;
    alert("Login successful!");
    
    // Hide login and signup buttons and show logout button
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('signupBtn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'inline-block';
    
    // Close the login modal
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
  } else {
    alert("Invalid login credentials. Try 'admin' / 'admin'.");
  }
}

// Function to show the signup modal
function showSignupModal() {
  var myModal = new bootstrap.Modal(document.getElementById('signupModal'));
  myModal.show();
}

// Function to handle signup (mockup for now)
function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('signupUsername').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  // Simulating successful signup
  alert(`Signup successful for ${username}!`);
  
  // Close the signup modal after successful signup
  const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
  signupModal.hide();
}

// Handle the booking submission
function submitBooking(event) {
  event.preventDefault();
  const appointmentDate = document.getElementById('appointmentDate').value;
  const timeslot = document.getElementById('timeslot').value;

  if (!appointmentDate || !timeslot) {
    alert("Please select both date and time.");
    return;
  }

  alert(`Appointment successfully booked for ${appointmentDate} at ${timeslot}.`);
  
  // Close the booking modal
  const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
  bookingModal.hide();
}

// Logout function
function logout() {
  isLoggedIn = false;
  alert("Logged out successfully.");
  
  // Show login and signup buttons again and hide logout button
  document.getElementById('loginBtn').style.display = 'inline-block';
  document.getElementById('signupBtn').style.display = 'inline-block';
  document.getElementById('logoutBtn').style.display = 'none';
}
