import { useEffect, useState } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  const [profile, setProfile] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data.results[0]);
      });
  }, []);


  return (
    <div className='App'>
      {profile ? <ProfileCard profile={profile} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
