import {React, useState} from 'react'
import {CardActions, CardContent, CardMedia} from "@material-ui/core";
import Card from "@mui/material/Card";
import MySvg from '../../images/photo-1535713875002-d1d0cf377fde.jpg';
import {Button, Col, Row} from "antd";
import './search.css';
import {useHistory} from "react-router-dom";


const data = [{
  "id": 1,
  "text": "Comsats"
}, {
  "id": 2,
  "text": "Fast"
}, {
  "id": 3,
  "text": "Centizu"
}, {
  "id": 4,
  "text": "Dynabox"
}, {
  "id": 5,
  "text": "Avaveo"
}, {
  "id": 6,
  "text": "Demivee"
}, {
  "id": 7,
  "text": "Jayo"
}, {
  "id": 8,
  "text": "Blognation"
}, {
  "id": 9,
  "text": "Podcat"
}, {
  "id": 10,
  "text": "Layo"
}]

function Search1(props) {
  const router = useHistory();
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input)
    }
  })
  return (
            <div className="horizontal">
              <Row>
            {filteredData.map((item) => (
                <Col span={7} offset={1} >
                  <Card >
                    <div style={{width:300}}>
                      <CardMedia
                          component="img"
                          src={MySvg}
                          alt="counsellor picture"
                      />
                    </div>

                    <CardContent>
                      <h1>
                        {item.text}
                      </h1>
                      <h2>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </h2>
                      <Button onClick={() => {
                        router.push("/counsellor-profile")
                      }}>View More</Button>
                    </CardContent>

                  </Card>
                  <div style={{marginTop:"20%"}}/>
                </Col>

            ))}
              </Row>
            </div>


  )
}

export default Search1;
