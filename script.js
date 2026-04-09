function submitBooking() {
    const btn = document.getElementById("submitBtn");

    // Get values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const fittingDate = document.getElementById("fittingDate").value;
    const fittingType = document.getElementById("fittingType").value;
    const design = document.getElementById("designSelect").value;
    const notes = document.getElementById("notes").value.trim();

    // Simple validation
    if (!firstName || !lastName || !email || !phone || !fittingDate || !fittingType) {
      alert("Please fill in all required fields.");
      return;
    }

    // Loading state
    btn.disabled = true;
    btn.innerHTML = "<span>Sending...</span>";

    // EmailJS template params
    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      fitting_date: fittingDate,
      fitting_type: fittingType,
      design: design || "Not selected",
      notes: notes || "None",
    };

    // Send email
    emailjs.send("service_thu5ecq", "template_srzamgw", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        // Hide form
        document.getElementById("formContent").style.display = "none";

        // Show success message
        document.getElementById("formSuccess").style.display = "block";

      }, function (error) {
        console.log("FAILED...", error);

        alert("Something went wrong. Please try again.");
        
        btn.disabled = false;
        btn.innerHTML = "<span>Confirm Booking →</span>";
      });
  }