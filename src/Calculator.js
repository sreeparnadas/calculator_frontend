import Header from './Header'
import React,{useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';


function Calculator(){

    const [n1,setN1] = useState("");
    const [r1,setR1] = useState("");
    const [n2,setN2] = useState("");
    const [r2,setR2] = useState("");

    const [resultData,setData] = useState([]);

    async function doNCPRCalculation(){
        const formData = new FormData();
        formData.append('name',34);
        formData.append('n1',n1);
        formData.append('r1',r1);
        formData.append('n2',n2);
        formData.append('r2',r2);
        console.log(formData);

        let result = await fetch("http://127.0.0.1:8000/api/nCPr",{
            method:"POST",
            body: formData
        })
        result = result.json()
        setData(result);
        console.log(result);
        console.log(resultData);
    }
    return (
        <Container style={{"backgroundColor": "#a59090"}}>
            <Header/>
            <Row className='mt-5'>
                <Col>
                <label><h3 style={{'marginLeft': '-116px'}}>n</h3>
                    <input type="text" size="sm" className="form-control input-box" onChange={(e)=>setN1(e.target.value)}/>
                </label>
                <h1>C</h1>
                <label><h3 style={{'marginLeft': '-116px'}}>r</h3>
                    <input type="text" size="sm" className="form-control input-box"  onChange={(e)=>setR1(e.target.value)}/>
                </label>
                    
                </Col>

                <Col>
                <label><h3 style={{'marginLeft': '-116px'}}>n</h3>
                    <input type="text" size="sm" className="form-control input-box"  onChange={(e)=>setN2(e.target.value)}/>
                </label>
                <h1>P</h1>
                <label><h3 style={{'marginLeft': '-116px'}}>r</h3>
                    <input type="text" size="sm" className="form-control input-box"  onChange={(e)=>setR2(e.target.value)}/>
                </label>

                    
                </Col>
            </Row>

            <Row>
                <Col className="m-5">
                    <input type="text" readOnly={true} size="sm" className="form-control input-box"/>
                </Col>
                <Col className="m-5">
                    <input type="text" readOnly={true} size="sm" className="form-control input-box"/>
                </Col>
            </Row>

            <Row>
                <Col className="m-5">
                    <span className='m-5'><button className="btn btn-lg btn-success" onClick={doNCPRCalculation}>Go</button></span>
                    <span className='m-5'><button className="btn btn-lg btn-warning">Clear</button></span>
                </Col>
            </Row>
        </Container>
    )
}


export default Calculator