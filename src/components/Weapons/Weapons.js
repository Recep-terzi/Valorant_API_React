import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button'
import {Link} from "react-router-dom"
const Weapons = () => {
    const [weapons,setWeapons] = useState([])
    const url = "https://valorant-api.com/v1/weapons"
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setWeapons(data.data))
    },[])
  
  return (
    <div className="container">
        <div className="row">
        {
            weapons.map(weapon =>(
                <>
                   
                    <div className="col-md-3"><div className="card" style={{marginTop:"10px",padding:"20px"}}>
                <img src={weapon.displayIcon} alt=""  className="card-img-top" style={{width:"200px",height:"70px"}}/>
                <div className="card-body">
                  <h4 className="card-title">{weapon.displayName}</h4>
                  <p className="card-text">
                    {weapon.description}
                  </p>
                  
                </div>
                
              </div></div>
                   
                </>
            ))
        }
        </div>
    </div>
  )
}

export default Weapons