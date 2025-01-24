import React, { useState } from 'react';
import './index.css'

/*
● On the "Home" page, you need to create an input field and a "Login" button.
The input field should request the user to enter their name.

● Once the user enters their name and clicks the login button, the input field
should be replaced with a <h1> tag saying, "Welcome (user name)," and the
"Login" button text should change to "Logout".

● The user should not be able to log in if the input field is empty.

● If the "Logout" button is clicked, the welcome message should disappear,
and the input field should reappear for the user to enter their name again.
Then, the logout button should change to the login button again.
*/
export default function Home() {
  const [name, setName] = useState('');
  const [IsLogIn, setIsLogIn] = useState(false);

  const setAction = (request) => {
    switch (request) {
      case 'login':
        if (name.trim() !== '') {
          setIsLogIn(true);
        } else
        {
          alert('Please enter the name');
        }
        
        break;
      case 'logout':
        setIsLogIn(false);
        setName('');
        break;
      default:
        break;
    }

    
  };

  return (
    <div className='home'>
      {IsLogIn ? (
          <div>
          <h1>Welcome, {name}!</h1>
          <button onClick={()=>setAction('logout')}>Logout</button>
        </div>
        ) : (
          <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Please enter your name" />
          <button onClick={()=>setAction('login')}>Login</button>
        </div>      
          )
        }
    </div>
  );
}