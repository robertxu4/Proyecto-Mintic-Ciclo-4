import React from "react";
import { Container, Row } from "react-bootstrap";




export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    render() { 
        return (
            <div style={{ 
                backgroundImage: `url("https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/informatica_basica/image/compescritorio-01_xl.png")` 
              }}>

           <h1 style={{marginTop: 20}}> <br/>Componentes Pc.i</h1> 
          </div>

                  
        );
    }
}
