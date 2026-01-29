// FAQ accordion
document.querySelectorAll(".faq-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
});

// Enquiry form (demo submit)
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "✅ Thanks! We’ll contact you soon with the syllabus.";
    enquiryForm.reset();
  });
}
