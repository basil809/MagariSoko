//funtion to open the sidebar and the Car makes
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function toggleCarMakes() {
    const carMakes = document.getElementById('car-makes');
    carMakes.classList.toggle('hidden');
}

function toggleAboutUs(){
    const AboutUs = document.getElementById('about-us');
    AboutUs.classList.toggle('hidden')
}
// search_bar function
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        vehicleCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                card.style.display = ''; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });
    });
});

// Sample data to search through
const carData = [
    { id: 1, name: "Toyota Supra", price: "Ksh. 2,000,000", status: "Available", dealer: "John Doe", phone: "0712 345 678", kilometers: "10,000 km", year: "2024", fuelType: "Petrol", transmission: "Automatic", engine: "2000 cc", color: "White", interior:'-', images: ['images/sale_images/car_1.jpg', 'images/sale_images/Supra_frontview.jfif', 'images/sale_images/supra_engine.jfif', 'images/sale_images/supra_backview.jfif'] },
    { id: 2, name: "Nissan GTR", price: "Ksh. 3,000,000", status: "Available", dealer: "Jane Smith", phone: "0712 345 679", kilometers: "15,000 km", year: "2023", fuelType: "Petrol", transmission: "Manual", engine: "3800 cc", color: "Black", interior:'-', images: ['images/sale_images/gtr_frontview.jpg', 'images/sale_images/gtr_backview.jpg', 'images/sale_images/gtr_key.jpg'] },
    { id: 3, name: "Toyota E100", price: "Ksh. 220,000", status: "Sold", dealer: "Mike Johnson", phone: "0712 345 680", kilometers: "80,000 km", year: "1995", fuelType: "Petrol", transmission: "Manual", engine: "1500 cc", color: "white", interior:'Black', images: ['images/sale_images/Toyota Corolla _frnt.jfif', 'images/sale_images/Toyota Corolla 1994.jfif', 'images/sale_images/Toyota_corolla_95_int.jfif'] },
    { id: 4, name: "Toyota VX Limited", price: "Ksh. 2,220,000", status: "Available", dealer: "Basil Onyango", phone: "0742743059", kilometers: "100,000", year: "2002", fuelType: "Petrol", transmission: "Automatic", engine: "2000 cc", color: "White/Grey", interior:'Black', images: ['images/sale_images/carousel_2.0.jpg','images/sale_images/sale_images/Toyota_Land_Cruiser_VX_VJA300W_interior_side.jpg','images/sale_images/vx_land_cruiser_interior.jpeg'] },
    { id: 5, name: "Toyota Corolla", price: "Ksh. 2,000,000", status: "Available", dealer: "Basil Onyango", phone: "0742743059", kilometers: "0", year: "2024", fuelType: "Petrol", transmission: "Automatic", engine: "2000 cc", color: "White", interior:'Black', images: ['images/sale_images/car_3.jpg','images/sale_images/corolla_new_engine.jpg','images/sale_images/corolla_steering_speedometer.jpg'] },
    { id: 6, name: "Toyota probox", price: "Ksh. 450,000", status: "Available", dealer: "Basil Onyango", phone: "0742743059", kilometers: "0", year: "2016", fuelType: "Petrol", transmission: "Automatic", engine: "2000 cc", color: "White", interior:'Black', images: ['images/sale_images/probox_img_1.jpeg','images/sale_images/probox_img_2int.jpeg','images/sale_images/probox_img_3side.jpeg','images/sale_images/probox_img_4bottom.jpeg'] },
    { id: 7, name: "Toyota Harrier", price: "Ksh. 3,449,999", status: "Available", dealer: "Basil Onyango", phone: "0742743059", kilometers: "52,000", year: "2016", fuelType: "Petrol", transmission: "Automatic", engine: "2000 cc", color: "Black", interior:'Black', images: ['images/sale_images/Harrier_KDM_frontview.jpeg','images/sale_images/Harrier_front_right_view.jpeg','images/sale_images/Harrier_front_left_view.jpeg','images/sale_images/Toyota_harrier_kdm_backview.jpeg','images/sale_images/Harrier_backright_view.jpeg','images/sale_images/Harrier_backright_view.jpeg','images/sale_images/harrier_speedometer.jpeg'] },
    { id: 8, name: "BMW X3 XDrive 20d M-SPORT", price: "Ksh. 4,499,999", status: "Available", dealer: "Franklin Okoth", phone: "0742743059", kilometers: "61,000", year: "2017", fuelType: "Diesel", transmission: "Automatic", engine: " 2000cc", color: "Black", interior:'Black', images: ['images/sale_images/BIMA_frontview_center.jpeg','images/sale_images/BIMA_frontview_right.jpeg','images/sale_images/BIMA_frontview_left.jpeg','images/sale_images/BMW_Intr.jpg','images/sale_images/BMW_inf_sideview.jpeg','images/sale_images/BIMA_speedometer.jpeg','images/sale_images/BMW_ex_backview.jpeg','images/sale_images/BIMA_boot.jpeg'] },
    { id: 9, name: "Toyota Rav 4", price: "Ksh. 3,250,000", status: "Available", dealer: "Gideon Kimani", phone: "0742743059", kilometers: "32,000", year: "2017", fuelType: "petrol", transmission: "Automatic", engine: " 1500cc", color: "Black", interior:'Black', images: ['images/sale_images/Toyota_Rav4_frontview.jpeg','images/sale_images/Rav_in_sideview.jpeg','images/sale_images/Rav4_in_backview.jpeg','images/sale_images/Rav4_ex_sideview.jpeg','images/sale_images/Rav_backseats_view.jpeg','images/sale_images/Rav4_in_backview.jpeg','images/sale_images/rav_ex_backview2.jpeg','images/sale_images/Rav4_ex_sideview.jpeg'] },
];

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = cars.filter(car => car.name.toLowerCase().includes(query));
    displayResults(results);
});

function displayResults(results) {
    const section = document.querySelector('.trending_sales');
    section.innerHTML = `
        <div class="header">
            <h1 style="font-size: 40px; font-weight: bold; padding-left: 30px; padding: 20px;">Search Results</h1>
        </div>
        <div class="trending_cards">
            ${results.map(car => `
                <a href="car_details.html?id=${car.id}" class="trend-card">
                    <div class="trend-card_img">
                        <img src="${car.img}" alt="${car.name}">
                    </div>
                    <div class="trend-card_content">
                        <h3>${car.name}</h3>
                        <p>Price: ${car.price}</p>
                        <p>Status: ${car.status}</p>
                        <p>Dealer: ${car.dealer}</p>
                        <p>Phone: ${car.phone}</p>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("loginModal");
    const btn = document.getElementById("loginBtn");
    const span = document.getElementsByClassName("close")[0];
    const modalBody = document.getElementById("modalBody");

    // Toast container
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.style.position = "fixed";
        toast.style.top = "20px";
        toast.style.right = "20px";
        toast.style.minWidth = "250px";
        toast.style.padding = "15px 20px";
        toast.style.borderRadius = "8px";
        toast.style.color = "white";
        toast.style.fontWeight = "bold";
        toast.style.display = "none";
        toast.style.zIndex = "9999";
        document.body.appendChild(toast);
    }

    // Show toast function
    function showToast(message, type = "success", duration = 3000) {
        toast.textContent = message;
        toast.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
        toast.style.display = "block";
        toast.style.opacity = 1;

        setTimeout(() => {
            toast.style.transition = "opacity 0.5s";
            toast.style.opacity = 0;
            setTimeout(() => { toast.style.display = "none"; }, 500);
        }, duration);
    }

    const dropdownMenu = document.createElement('div');
    
    dropdownMenu.setAttribute('id', 'userDropdown');
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.backgroundColor = '#fff';
    dropdownMenu.style.border = '1px solid #ccc';
    dropdownMenu.style.zIndex = '1000';
    dropdownMenu.style.padding = '10px';
    dropdownMenu.innerHTML = `
        <a href="/dashboard.html" id="dashboardLink" style="display: block; color: black; text-decoration: none; margin-bottom: 10px;">Dashboard</a>
        <a href="#" id="logoutLink" style="display: block; color: black; text-decoration: none;">Logout</a>
    `;
    
    document.body.appendChild(dropdownMenu);

    // Function to update login button after login
    function updateLoginButton(username) {
        const loginBtn = document.getElementById("loginBtn");
        const userMenu = document.getElementById("userDropdown");
        if (loginBtn) loginBtn.style.display = "none";
        if (userMenu) userMenu.style.display = "block";
        userMenu.querySelector("#dashboardLink").textContent = `Hello, ${username}`;
    }

    // Load login form dynamically into modal
    const loadLoginForm = () => {
        modalBody.innerHTML = `
            <h2>Login</h2>
            <div class="col-md-auto img_logo">
                <a href="images/magarisoko_2.jfif" class="logo">
                    <img src="images/magarisoko_2.jfif" alt="MagariSoko Logo">
                    <span>MagariSoko</span>
                </a>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <form id="loginForm">
                        <label for="username">Username:</label> 
                        <input type="text" id="username" name="username" placeholder="John Doe" required>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required><br>
                        <input type="submit" value="Login" style="color: white; background-color: green; border: black; height: 50px;">
                    </form>
                    <div class="mid_divider"></div>
                    <div id="g_id_onload"
                        data-client_id="YOUR_GOOGLE_CLIENT_ID"
                        data-context="signin"
                        data-ux_mode="popup"
                        data-login_uri="YOUR_BACKEND_LOGIN_URL"
                        data-auto_prompt="false">
                    </div>
                    <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="center" style="width: 100%;"></div>
                </div>
                <div class="col-md-6">
                    <h3>Welcome to Magarisoko!</h3>
                    <p>
                        Thank you for joining our community! We're excited to have you here. 
                        Whether you're logging in or signing up, you're just a step away from exploring our exclusive content and connecting with like-minded individuals.<br>
                        If you have any questions, feel free to reach out.
                        <br>
                        Enjoy your journey with us! Happy exploring!<br>The Magarisoko Team
                    </p>
                    <div class="new_signup">
                        <button id="new_user" class="signup" style="width: 100%;">Sign Up</button>
                    </div>
                </div>
            </div>
        `;
        // Attach event listener to the login form
        const loginForm = document.getElementById('loginForm');
        loginForm .addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(loginForm);
            const data = {
                username: formData.get('username'),
                password: formData.get('password')
            };

            try {
                const response = await fetch('https://magarisoko-backend.onrender.com/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    showToast('Login successful! Redirecting...', 'success', 3000);
                    localStorage.setItem('username', result.username);
                    updateLoginButton(result.username);

                    setTimeout(() => window.location.href = '/dashboard.html', 3000);
                } else {
                    showToast(result.error || 'Login failed', 'error', 4000);
                }

            } catch (err) {
                console.error('Login error:', err);
                showToast('Failed to login. Please try again.', 'error', 4000);
            }
        });

        //Load username from localStorage if already logged in
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
            updateLoginButton(savedUsername);
        }
        
        const newUserBtn = document.getElementById('new_user');
        if (newUserBtn) {
            newUserBtn.onclick = loadSignUpForm;
        }
    };

    const loadSignUpForm = () => {
    modalBody.innerHTML = `
        <h2>Sign Up</h2>
        <div class="col-md-auto img_logo">
            <a href="images/magarisoko_2.jfif" class="logo">
                <img src="images/magarisoko_2.jfif" alt="MagariSoko Logo">
                <span>MagariSoko</span>
            </a>
        </div>
        <div class="row">
            <div class="col-md-6">
                <form id="signUpForm">
                    <label for="username">Username:</label> 
                    <input type="text" id="username" name="username" required>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required><br>
                    <button type="submit" style="color: white; background-color: green; border: black; height: 50px;">Sign Up</button>
                </form>
                <div class="mid_divider"></div>
                <div id="g_id_onload"
                    data-client_id="YOUR_GOOGLE_CLIENT_ID"
                    data-context="signin"
                    data-ux_mode="popup"
                    data-login_uri="YOUR_BACKEND_LOGIN_URL"
                    data-auto_prompt="false">
                </div>
                <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="center" style="width: 100%;"></div>
            </div>
            <div class="col-md-6">
                <h3>Welcome to Magarisoko!</h3>
                <p>
                    Thank you for joining our community! We're excited to have you here. 
                    Whether you're logging in or signing up, you're just a step away from exploring our exclusive content and connecting with like-minded individuals.<br>
                    If you have any questions, feel free to reach out.
                    <br>
                    Enjoy your journey with us! Happy exploring!<br>The Magarisoko Team
                </p>
                <div class="new_signup">
                    <button id="existing_user" class="login" style="width: 100%;">Login</button>
                </div>
            </div>
        </div>
    `;

    const existingUserBtn = document.getElementById('existing_user');
    if (existingUserBtn) {
        existingUserBtn.onclick = loadLoginForm;
    }

    // Handle sign-up form submission
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.onsubmit = async (e) => {
            e.preventDefault(); // Prevent default form submission

            // Gather form data
            const formData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
            };

            try {
                // Send POST request to the server
                const response = await fetch('https://magarisoko-backend.onrender.com/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                // Alert the user with the server's response message
                if (data.success) {
                    alert(data.message); // Success message
                    signUpForm.reset(); // Reset form after successful submission
                } else {
                    alert(data.message); // Error message
                }
            } catch (error) {
                console.error('Sign-up error:', error);
                alert('An unexpected error occurred. Please try again.');
            }
        };
    }
};

// Attach existing event handlers
if (btn) {
    btn.onclick = function (e) {
        if (btn.dataset.loggedIn === "true") {
            e.stopPropagation();
            const dropdown = btn.querySelector('.dropdown-menu');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        } else {
            if (modal) {
                modal.style.display = "block";
                loadLoginForm();
            } else {
                console.error("Modal element not found");
            }
        }
    };
}

if (span) {
    span.onclick = function () {
        if (modal) {
            modal.style.display = "none";
        } else {
            console.error("Modal element not found");
        }
    };
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Check if the user is already logged in
const checkUserStatus = async () => {
    try {
        const response = await fetch('https://magarisoko-backend.onrender.com/check-login-status', { 
            method: 'GET',
            credentials: 'include'
         });
        const data = await response.json();
        console.log(data);

        if (data.loggedIn) {
            btn.innerHTML = `
                <div class="user-dropdown-wrapper">
                    <img src="images/user_image_icon.png" alt="User Icon" class="user-icon">
                    <span class="user-name">${data.username}</span>
                    <div class="dropdown-menu">
                        <li><a href="/dashboard.html">Dashboard</a></li>
                        <li><a href="#" id="logoutBtn">Logout</a></li>
                    </div>
                </div>
            `;

            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
            btn.dataset.loggedIn = "true";

            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                const dropdown = btn.querySelector('.dropdown-menu');
                if (!btn.contains(e.target)) {
                    dropdown.style.display = 'none';
                }
            });

            // Logout button
            const logoutLink = document.getElementById('logoutBtn');
            logoutLink.addEventListener('click', async (e) => {
                e.preventDefault();
                try {
                    await fetch('https://magarisoko-backend.onrender.com/logout', { method: 'POST', credentials: 'include' });
                    btn.innerHTML = 'Login | Register';
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                    btn.dataset.loggedIn = "false";
                } catch (error) {
                    console.error('Logout failed:', error);
                }
            });

        } else {
            btn.innerHTML = 'Login | Register';
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.dataset.loggedIn = "false";
        }
    } catch (error) {
        console.error('Error checking login status:', error);
    }
};

// Call the checkUserStatus function when the page loads
checkUserStatus();

});


//js code for feeding the user dashboard
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://magarisoko-backend.onrender.com/api/user-info', {
      credentials: 'include'  // ✅ send cookie
    });

    if (!response.ok) throw new Error('Unauthorized');

    const data = await response.json();

    const usernameEl = document.getElementById('loggedInUsername');
        if (usernameEl) {
        usernameEl.textContent = data.username;
    }


    const vehicleList = document.getElementById('vehicle-list');
    data.vehicles.forEach(v => {
      const div = document.createElement('div');
      div.className = 'vehicle';
      div.innerHTML = `<h3>${v.make} ${v.model}</h3><p>Price: ${v.price}</p><p>Year: ${v.year}</p>`;
      vehicleList.appendChild(div);
    });

    const recommendationList = document.getElementById('recommendation-list');
    data.recommendations.forEach(r => {
      const div = document.createElement('div');
      div.className = 'recommendation';
      div.innerHTML = `<h3>${r.title}</h3><p>${r.description}</p>`;
      recommendationList.appendChild(div);
    });

  } catch (err) {
    console.error('Error fetching user info:', err);
    
  }
});







