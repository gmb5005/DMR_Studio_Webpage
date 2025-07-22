import './utils.css';

export async function handleSubmit(e, formData, setMessage, endpoint = 'login', setUser, navigate) {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            if (setUser && data.user){
                setUser(data.user); // Update AuthContext
                console.log('User data sent');
            }
            
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
                if (navigate) {
                    navigate('/');
                }
            };
            
            popup.appendChild(document.createElement('br'));
            popup.appendChild(closeBtn);

            overlay.appendChild(popup);
            document.body.appendChild(overlay);
        } else {
            setMessage(data.message);
        }
    } catch (error) {
        setMessage('An error occurred. Please try again.');
    }
}