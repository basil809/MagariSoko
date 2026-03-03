//code for displaying the vehicle posting form in dealers.html
// Add event listener to the "Add Vehicle" button
 // Get modal and control elements
 const dealerModal = document.getElementById("Dealermodal");
 const openModalBtn = document.getElementById("AddVehicleBtn");
 const closeBtn = dealerModal.querySelector(".close");

 // Show the modal when the button is clicked
 openModalBtn.addEventListener("click", () => {
   dealerModal.style.display = "block";
 });

 // Close the modal when the close (×) button is clicked
 closeBtn.addEventListener("click", () => {
   dealerModal.style.display = "none";
 });

 // Close the modal when clicking outside the modal content
 window.addEventListener("click", (event) => {
   if (event.target === dealerModal) {
     dealerModal.style.display = "none";
   }
 });

