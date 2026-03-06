document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://magarisoko-backend.onrender.com/dealer-info');
        const data = await response.json();

        if (data.success) {
            const dealer = data.dealer;
            const userCard = `
                <div class="card">
                    <div class="user_icon">
                        <img src="images/user_icon/account_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" alt="user_icon">
                    </div>
                    <h1>${dealer.username}</h1>
                    <p>ID No: ${dealer.id_no}</p>
                    <p>Phone Number: ${dealer.phone_number}</p>
                    <p>Email: ${dealer.email}</p>
                    <p>Address: ${dealer.address}</p>
                    <div class="actionBtn">
                        <button class="btn btn-warning edit-Dealer" style="width: 100px;" data-id="${dealer._id}">Edit</button>
                        <button class="btn btn-danger delete-Dealer" style="width: 100px;" data-id="${dealer._id}">Delete</button>
                    </div>
                </div>
            `;
            document.getElementById ('account-info').innerHTML = userCard;

            // Attach event listeners for edit and delete
            attachEventListeners();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('An error occurred while fetching user data.');
    }
});

function attachEventListeners() {
    document.querySelector('.edit-Dealer').addEventListener('click', async function(event) {
        const dealerId = event.target.getAttribute('data-id');
        const dealer = await fetchDealerDetailsById(dealerId);
        if (dealer) {
            showEditModal(dealer);
        }
    });

    // Delete dealer
    document.querySelector('.delete-Dealer').addEventListener('click', async function(event) {
        const dealerId = event.target.getAttribute('data-id');
        
        // Confirm with the user before deletion
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                const response = await fetch(`https://magarisoko-backend.onrender.com/delete-dealer/${dealerId}`, {
                    method: 'DELETE'
                });

                const result = await response.json();

                if (result.success) {
                    alert('Your account has been successfully deleted.');
                    // Optionally, redirect to homepage or login page
                    window.location.href = '/index.html';
                } else {
                    alert(result.message || 'Failed to delete account.');
                }
            } catch (error) {
                console.error('Error deleting dealer account:', error);
                alert('An error occurred while deleting your account.');
            }
        }
    });
}

// Fetch dealer details by ID
async function fetchDealerDetailsById(dealerId) {
    try {
        const response = await fetch(`/dealer-info?dealerId=${dealerId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch dealer by ID');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching dealer by ID:', error);
        return null;
    }
}
// Show edit modal with dealer details
function showEditModal(dealer) {
    console.log('Populating modal with Dealer Details:', dealer);

    // Ensure the nested `dealer` object is extracted from the response
    if (dealer.dealer) {
        dealer = dealer.dealer;
    }

    // Check if dealer._id is defined
    if (!dealer._id) {
        console.error('Dealer ID is undefined');
        return;
    }

    // Populate the edit modal with dealer data
    document.getElementById('dealerId').value = dealer._id;
    document.getElementById('user_name').value = dealer.username;
    document.getElementById('phone_Number').value = dealer.phone_number;
    document.getElementById('user_email').value = dealer.email;
    document.getElementById('user_idNo').value = dealer.id_no;
    document.getElementById('user_address').value = dealer.address;

    // Display Modal
    const modal = document.getElementById('dealerEdit');
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Handle form submission
document.getElementById('edit-dealer-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dealerId = document.getElementById('dealerId').value;
    if (!dealerId) {
        alert('Dealer ID is missing!');
        return;
    }

    const updatedDealer = {
        username: document.getElementById('user_name').value,
        id_no: document.getElementById('user_idNo').value,
        phone_number: document.getElementById('phone_Number').value,
        email: document.getElementById('user_email').value,
        address: document.getElementById('user_address').value
    };

    fetch(`https://magarisoko-backend.onrender.com/update-dealer/${dealerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedDealer)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Dealer information updated successfully.');
                document.getElementById('dealerEdit').style.display = 'none';
                // Optionally, update the displayed dealer information
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error updating dealer data:', error);
            alert('An error occurred while updating dealer data.');
        });
});
