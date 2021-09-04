import React, {Component} from "react";
import axios from "axios";
import {Card} from "react-bootstrap";
export default class HomeComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            covid:[],
        };
    }
    componentDidMount() {
        axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then((response)=>{
            let covid = Object.values(response.data);
            covid = covid.filter(item => item !== true);
            covid = covid.filter(item => item !== "Success");
            this.setState(
                {covid}
            );

        });

    }

    render() {
        console.log(this.state.covid);

        return(
          <>

              {this.state.covid.map((data) => (
                  <Card
                      style={{ width: "25rem", display: "inline-block", margin: "1rem" }}
                  >

                      <Card.Body>
                          <Card.Title>global_deaths : {data.global_deaths}</Card.Title>
                          <Card.Text>global_new_cases :{data.global_new_cases}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                          <ul>
                              <li>global_new_deaths :{data.global_new_deaths} </li>



                          </ul>
                      </Card.Footer>
                  </Card>
              ))}

          </>
        );


    }
}