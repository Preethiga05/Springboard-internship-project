import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/signin', {
        email,
        password
      });

      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Alert the user that login was successful
      alert('Login Successful');

      // Call function to fetch protected data after login
      fetchUserData();
    } catch (error) {
      console.error(error);
      alert('Login Failed');
    }
  };

  // Fetch protected data using the JWT token
  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.get('http://localhost:8080/api/protected', {
          headers: {
            'Authorization': `Bearer ${token}` // Attach JWT token in Authorization header
          }
        });
        setUserData(response.data); // Set the fetched data to state
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      }
    } else {
      setError('User not authenticated');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <h3>Protected Data:</h3>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
