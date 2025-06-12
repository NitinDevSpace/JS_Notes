const otpInputs = document.querySelectorAll(".input");

otpInputs.forEach((input, index) => {
  // Listen for input event to move forward
  input.addEventListener("input", (e) => {
        const value = e.target.value;

        // Allow only digits (optional depending on OTP type)
        if (!/^\d$/.test(value)) {
        e.target.value = ""; // Clear invalid input
        return;
        }

        // Move to next input if current is filled
        if (value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
        }
  });

  // Listen for keydown to handle Backspace/Delete properly
  input.addEventListener("keydown", (e) => {
        const key = e.key;

        // If Backspace/Delete is pressed and input is not empty, clear input
        if ((key === "Backspace" || key === "Delete") && input.value !== "") {
        e.preventDefault(); // Prevent default behavior i.e ensures the key doesn’t apply twice.
        input.value = "";   // Clear current input
        return;
        }

        // If input is empty and Backspace is pressed, move to previous field
        if ((key === "Backspace" || key === "Delete") && input.value === "" && index > 0) {
        otpInputs[index - 1].focus();
        }
  });

   // Handle paste event
  input.addEventListener("paste", (e) => {
        e.preventDefault();
        const paste = (e.clipboardData || window.clipboardData).getData("text");

        // Get only digits
        const digits = paste.replace(/\D/g, "").split("");

        if (digits.length === 0) return;

        // Fill inputs starting from the current one
        for (let i = 0; i < otpInputs.length; i++) {
        if (digits[i]) {
            otpInputs[i].value = digits[i];
        } else {
            otpInputs[i].value = "";
        }
        }

        // Focus the last filled input (or last one if overfilled)
        const lastFilledIndex = Math.min(digits.length, otpInputs.length) - 1;
        otpInputs[lastFilledIndex].focus();

  });

});

