  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Remove old messages
    document.querySelectorAll(".error").forEach(e => e.remove());
    const success = document.querySelector(".success");
    if (success) success.remove();

    let hasError = false;

    // Name check
    if (name === "") {
      showError("name", "Name is required");
      hasError = true;
    }

    // Email check
    if (email === "") {
      showError("email", "Email is required");
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      showError("email", "Enter valid email");
      hasError = true;
    }

    // Message check
    if (message === "") {
      showError("message", "Message is required");
      hasError = true;
    }

    // Success message
    if (!hasError) {
      const msg = document.createElement("p");
      msg.className = "success";
      msg.style.color = "green";
      msg.innerText = "Form submitted successfully!";
      document.querySelector("form").appendChild(msg);
      document.querySelector("form").reset();
    }
  });

  function showError(id, message) {
    const el = document.getElementById(id);
    const msg = document.createElement("p");
    msg.className = "error";
    msg.style.color = "red";
    msg.innerText = message;
    el.parentNode.appendChild(msg);
  }