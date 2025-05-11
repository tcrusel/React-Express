import { useEffect } from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  const profile = {
  name: {
    first: "Jennie",
    last: "Nichols",
  },
  email: "jennie.nichols@example.com",
  picture: {
    large: "https://randomuser.me/api/portraits/men/75.jpg",
  },
};;

  useEffect(() => {
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        (data.profile);
      });
  }, []);

  return (
    <div className='App'>
      <ProfileCard profile={profile} />
    </div>
  );
}

export default App;
