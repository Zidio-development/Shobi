import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [processData, setProcessData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch working process data from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/working-process')
      .then(response => {
        setProcessData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching working process data');
        setLoading(false);
      });

    // Fetch team member data from backend
    axios.get('http://localhost:5000/api/team')
      .then(response => {
        setTeamData(response.data);
      })
      .catch(err => {
        setError('Error fetching team member data');
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Our Working Process</h1>
        <p>Discover how we turn ideas into success stories.</p>
      </header>

      {/* Working Process Section */}
      <section className="process-container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          processData.map(step => (
            <div className="process-step" key={step._id}>
              <h2>{step.step}</h2>
              <p>{step.description}</p>
            </div>
          ))
        )}
      </section>

      {/* Team Members Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamData.map(member => (
            <div className="team-member" key={member._id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
