import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Header,List } from 'semantic-ui-react';

const url = 'http://localhost:5098/api'

function App() {

  const [activites, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${url}/activities`).then(response => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div className="App">
        <Header as="h2" icon="users" content="The Activities" />
        <List>
          {activites && activites.map((activity : any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
