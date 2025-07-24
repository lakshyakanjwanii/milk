document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Check if Firebase is initialized
    if (typeof firebase === 'undefined') {
        console.error('Firebase is not initialized. Make sure your Firebase configuration is included in your HTML.');
        return;
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
                // Signed in successfully
                const user = userCredential.user;
                console.log('Login successful:', user);
                // TODO: Redirect or show success message to the user
            } catch (error) {
                // Handle login errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Login failed:', errorCode, errorMessage);
                // TODO: Display error message to the user on the page
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            try {
                const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
                // Signed up successfully
                const user = userCredential.user;
                console.log('Registration successful:', user);
                // TODO: Redirect or show success message to the user
            } catch (error) {
                // Handle registration errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Registration failed:', errorCode, errorMessage);
                // TODO: Display error message to the user on the page
            }
        });
    }

    // Optional: Listen for authentication state changes
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            console.log('User is signed in:', user);
            // TODO: Update UI for logged-in state
        } else {
            // User is signed out.
            console.log('User is signed out.');
            // TODO: Update UI for logged-out state
        }
    });
});
