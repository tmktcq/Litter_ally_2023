//import logo from './logo.svg';
import React from 'react'
import './App.css';
import Home from './index.js';



const activities = [
  {
    id: 1,
    timestamp: new Date(),
    description: "User 1 liked User 2's post",
  },
  {
    id: 2,
    timestamp: new Date(),
    description: "User 3 commented on User 4's post",
  },
  // ...
];

function Activity({ activity }) {
  const timestampStyle = {
    color: "#999",
    fontSize: "14px",
  };

  const descriptionStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const activityStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
    justifyContent: "right",
    marginBottom: "16px",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    width: "500px"
  };
  return (
    <div style={activityStyle}>
      <p style={timestampStyle}>{activity.timestamp.toISOString()}</p>
      <p style={descriptionStyle}>{activity.description}</p>
    </div>
  );
}

function ActivityFeed({ activities }) {
  const activity_feed = {
    display: "flex-end",
    flexDirection: "column",
    alignItems: "center"
    // marginLeft: "auto"
  };
  return (
    
    <div style = {activity_feed}>
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

class App extends React.Component {
  
  render() {
    return(
      <div className='parentContainer'>
        <div className='topbar'>
            <p> deez nuts</p>
        </div>
        <div className='columnContainer'>
          
          <div className='column'>
            {/* <Home /> */}
          </div>
          
          <div className='column'>
            <Home />
          </div>

          <div className='column'>
            <ActivityFeed activities={activities}/>
          </div>

        </div>
      </div>
    )
    }
    }

export default App;
