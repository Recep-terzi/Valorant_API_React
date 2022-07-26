import React, { useState, useEffect }from 'react'
import './Main.Module.css'
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
const Main = () => {
    const [agents, setAgents] = useState([]);
    const url = "https://valorant-api.com/v1/agents";
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setAgents(data.data));
    }, []);
    
  return (
    <div className="container">
        <div className="row">
       {
        agents.map((agent) =>(
          <>
            <div className="col-md-3">
              <div className="card" style={{height:"630px",marginTop:"10px",padding:"20px"}}>
                <img src={agent.displayIcon} alt=""  className="card-img-top"/>
                <div className="card-body">
                  <h4 className="card-title">{agent.displayName}</h4>
                  <p className="card-text">
                    {agent.description}
                  </p>
                  
                </div>
                <Link to={`/detail/${agent.uuid}`}><Button variant="contained" fullWidth>Detail</Button></Link>
              </div>
            </div>
          </>
        ))
       }
      </div>
    </div>
  )
}

export default Main