import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [detail, setDetails] = useState([]);
  const [abilities,setAbilities] = useState([]);

  const url = `https://valorant-api.com/v1/agents/${id}`;
    console.log(abilities)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.data));
  }, []);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAbilities(data.data.abilities));
  }, []);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ marginTop: "30px" }}>
            <img src={detail.displayIcon} alt="" style={{width:"256px",height:"256px"}}></img>
          </div>
          <div className="col-md-8" style={{ marginTop: "30px" }}>
            <h1>{detail.displayName}</h1>
            <p style={{ marginBottom: "30px" }}>{detail.description}</p>
            {abilities.map((abiliti) => (
              <ul
                style={{
                  listStyle: "none",
                  background: "purple",
                  color: "white",
                  borderRadius:"10px"
                }}
              >
                <li>
                  <p style={{ fontSize: "30px" }}>{abiliti.slot} :  {abiliti.displayName} <img src={abiliti.displayIcon} alt="" style={{width:"50px",float:"right",marginRight:"10px"}}></img></p>
                  <p>{abiliti.description}</p>
                  
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
