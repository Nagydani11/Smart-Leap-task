import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    onSubmit(username, password);

    
    if (username === 'admin' && password === 'admin1') {
      navigate('/home'); 
    }
  };

  return (
    <div>
      <div>
        <h1>Smart Leap application</h1>
        <p>Please log in to continue. The username is admin, the password is admin1</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Pass:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Bejelentkezés</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;



/*
import { Link } from 'react-router-dom';

const Welcome = () =>{
    return(
        <>
            <h1>Welcome to the Smart Leap application</h1>
            <p>Jelentkezz be</p>
            <div>
                <button>Login</button>
                <button>Signin</button>
            </div>
        </>
    )
}

export default Welcome;

*/