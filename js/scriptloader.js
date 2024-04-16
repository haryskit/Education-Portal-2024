$(document).ready(function () {
    $("#view-profile-modal").load("modal-profile.html");
    // $("#footer-placeholder").load("footer.html");
    // setContent();
    
    // Add an event listener to the profile button
    document.getElementById('profile-btn').addEventListener('click', function() {
        // Call the function to show the profile modal
        setContent();
    });
});

function setContent(){
    alert("hello");

    // var modal = document.getElementById("view-profile-modal-new");
    // $(modal).modal('show');
    
    // // Check if the modal element exists
    // if (modal) {
    //     // Use Bootstrap's modal function to show the modal
        
    // } else {
       
    // }
}