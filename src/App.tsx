import { useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

const sampleProfile = {
  name: {
    first: "Jennie",
    last: "Nichols",
  },
  email: "jennie.nichols@example.com",
  picture: {
    large: "https://randomuser.me/api/portraits/men/75.jpg",
  },
};

function App() {
  const [profile, setProfile] = useState(sampleProfile);

  const getProfile = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.results[0]);
      });
  };

  return (
    <div className='App'>
      <ProfileCard profile={profile} />
      <button type="button" onClick={getProfile} style={{backgroundColor: "grey"}}>Get profile</button>
    </div>
  );
}

export default App;
