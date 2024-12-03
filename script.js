
// JavaScript for Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("يرجى ملء جميع الحقول.");
        return;
    }

    if (!validateEmail(email)) {
        alert("يرجى إدخال بريد إلكتروني صالح.");
        return;
    }

    alert("تم إرسال رسالتك بنجاح!");
    // Here you could add functionality to actually send the form data.
    this.reset(); // Reset the form
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
