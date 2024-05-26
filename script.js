document.addEventListener('DOMContentLoaded', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const consultations = JSON.parse(localStorage.getItem('consultations')) || [];
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    // Initialize dashboard
    const userName = document.getElementById('user-name');
    if (userName) {
        userName.textContent = user.name;
    }

    // Populate consultations
    const consultationList = document.getElementById('consultation-list');
    if (consultationList) {
        consultations.forEach(consultation => {
            const div = document.createElement('div');
            div.className = 'consultation';
            div.innerHTML = `
                <h3>Consultation with ${consultation.doctor}</h3>
                <p>Date: ${consultation.date}</p>
                <p>Time: ${consultation.time}</p>
            `;
            consultationList.appendChild(div);
        });
    }

    // Populate doctors
    const doctorList = document.getElementById('doctor-list');
    if (doctorList) {
        doctors.forEach(doctor => {
            const div = document.createElement('div');
            div.className = 'doctor';
            div.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
            `;
            doctorList.appendChild(div);
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === user.email && password === 'password') {
                alert('Login successful!');
                document.getElementById('logout-link').style.display = 'block';
                document.getElementById('login-link').style.display = 'none';
            } else {
                alert('Invalid email or password!');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const consultations = JSON.parse(localStorage.getItem('consultations')) || [];
    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    // Redirect to login page
    const getStartedButton = document.getElementById('get-started');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // Initialize dashboard
    const userName = document.getElementById('user-name');
    if (userName) {
        userName.textContent = user.name;
    }

    // Populate consultations
    const consultationList = document.getElementById('consultation-list');
    if (consultationList) {
        consultations.forEach(consultation => {
            const div = document.createElement('div');
            div.className = 'consultation';
            div.innerHTML = `
                <h3>Consultation with ${consultation.doctor}</h3>
                <p>Date: ${consultation.date}</p>
                <p>Time: ${consultation.time}</p>
            `;
            consultationList.appendChild(div);
        });
    }

    // Populate doctors
    const doctorList = document.getElementById('doctor-list');
    if (doctorList) {
        doctors.forEach(doctor => {
            const div = document.createElement('div');
            div.className = 'doctor';
            div.innerHTML = `
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
            `;
            doctorList.appendChild(div);
        });
    }

    // Show form to add consultation
    const addConsultationForm = document.getElementById('add-consultation-form');
    const showConsultationFormButton = document.querySelector('button[onclick="showForm(\'add-consultation-form\')"]');
    if (showConsultationFormButton) {
        showConsultationFormButton.addEventListener('click', () => {
            addConsultationForm.style.display = 'block';
        });
    }

    // Show form to add doctor
    const addDoctorForm = document.getElementById('add-doctor-form');
    const showDoctorFormButton = document.querySelector('button[onclick="showForm(\'add-doctor-form\')"]');
    if (showDoctorFormButton) {
        showDoctorFormButton.addEventListener('click', () => {
            addDoctorForm.style.display = 'block';
        });
    }

    // Add consultation
    if (addConsultationForm) {
        addConsultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const doctor = document.getElementById('consultation-doctor').value;
            const date = document.getElementById('consultation-date').value;
            const time = document.getElementById('consultation-time').value;
            const newConsultation = { id: Date.now(), doctor, date, time };
            consultations.push(newConsultation);
            localStorage.setItem('consultations', JSON.stringify(consultations));
            window.location.reload();
        });
    }

    // Add doctor
    if (addDoctorForm) {
        addDoctorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('doctor-name').value;
            const specialty = document.getElementById('doctor-specialty').value;
            const newDoctor = { id: Date.now(), name, specialty };
            doctors.push(newDoctor);
            localStorage.setItem('doctors', JSON.stringify(doctors));
            window.location.reload();
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email === user.email && password === 'password') {
                alert('Login successful!');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }

    // Handle logout
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }

    // Display logout link if logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        const loginLink = document.querySelector('nav ul li a[href="login.html"]');
        if (loginLink) {
            loginLink.style.display = 'none';
        }
        if (logoutLink) {
            logoutLink.style.display = 'block';
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // existing code...

    // Handle logout
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    // Display logout link if logged in
    if (localStorage.getItem('loggedIn') === 'true') {
        const loginLink = document.querySelector('nav ul li a[href="login.html"]');
        if (loginLink) {
            loginLink.style.display = 'none';
        }
        if (logoutLink) {
            logoutLink.style.display = 'block';
        }
    } else {
        const userName = document.getElementById('user-name');
        if (userName) {
            userName.textContent = '';
        }
    }
});
