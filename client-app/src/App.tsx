import axios from 'axios';
import React, { useEffect, useState } from 'react';

const url = 'http://localhost:5098/api'

function App() {

  const [activites, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${url}/activities`).then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
        <ul>
          {activites && activites.map((activity : any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
