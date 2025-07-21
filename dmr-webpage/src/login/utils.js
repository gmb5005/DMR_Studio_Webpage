import './utils.css';

export async function handleSubmit(e, formData, setMessage, endpoint = 'login') {
    e.preventDefault();
    try {
        setTimeout(() => setMessage('bye'), 10000); 
        const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        console.log('Response:', response);
        console.log('Endpoint:', endpoint);
        setTimeout(() => setMessage('hi'), 10000); // Clear message after 2 seconds
        const data = await response.json();
        if (response.ok) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'popup-utils-overlay';

            // Create popup box
            const popup = document.createElement('div');
            popup.className = 'popup-utils-box';
            popup.innerText = `Success in ${endpoint === 'login' ? 'login' : 'registration'}`;

            // Close button
            const closeBtn = document.createElement('button');
            closeBtn.innerText = 'OK';
            closeBtn.onclick = () => {
                document.body.removeChild(overlay);
                window.location.href = '/';
            };
            popup.appendChild(document.createElement('br'));
            popup.appendChild(closeBtn);

            overlay.appendChild(popup);
            document.body.appendChild(overlay);
        } else {
            console.log('Login/Register failed:', data.message);
            setMessage(data.message);
            setTimeout(() => setMessage('else'), 10000); 
        }
    } catch (error) {
        console.error('Error during fetch or processing:', error);
        setMessage('An error occurred. Please try again.');
        setTimeout(() => setMessage('error'), 10000); 
    }
}