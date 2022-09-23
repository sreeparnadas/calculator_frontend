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

    const [resultData,setData] = useState({nCr: '', nPr: ''});

    async function doNCPRCalculation(){
        if(n1==='' && r1=== '' && n2==='' && r2===''){
            return;
        }
        let item = {n1,r1,n2,r2};

        let result = await fetch("http://127.0.0.1:8000/api/nCPr",{
            method:"POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json "
            }
        })
        result = await result.json()
        setData(result);
    }

    function reset(){
        setData({nCr: '', nPr: ''});
        setN1('');
        setR1('');
        setN2('');
        setR2('');
    }
    return (
        <Container style={{"backgroundColor": "#a59090"}}>
            <Header/>
            <Row className='mt-5'>
                <Col>
                <label><h3 style={{'marginLeft': '-116px'}}>n</h3>
                    <input type="text" size="sm" className="form-control input-box" value={n1} onChange={(e)=>setN1(e.target.value)}/>
                </label>
                <h1>C</h1>
                <label><h3 style={{'marginLeft': '-116px'}}>r</h3>
                    <input type="text" size="sm" className="form-control input-box" value={r1}  onChange={(e)=>setR1(e.target.value)}/>
                </label>
                    
                </Col>

                <Col>
                <label><h3 style={{'marginLeft': '-116px'}}>n</h3>
                    <input type="text" size="sm" className="form-control input-box" value={n2}  onChange={(e)=>setN2(e.target.value)}/>
                </label>
                <h1>P</h1>
                <label><h3 style={{'marginLeft': '-116px'}}>r</h3>
                    <input type="text" size="sm" className="form-control input-box" value={r2}  onChange={(e)=>setR2(e.target.value)}/>
                </label>

                    
                </Col>
            </Row>

            <Row>
                <Col className="m-5">
                    <input type="text" value={resultData.nCr} readOnly={true} size="sm" className="form-control input-box"/>
                </Col>
                <Col className="m-5">
                    <input type="text" value={resultData.nPr} readOnly={true} size="sm" className="form-control input-box"/>
                </Col>
            </Row>

            <Row>
                <Col className="m-5">
                    <span className='m-5'><button className="btn btn-lg btn-success" onClick={doNCPRCalculation}>Go</button></span>
                    <span className='m-5'><button className="btn btn-lg btn-warning" onClick={reset}>Clear</button></span>
                </Col>
            </Row>
        </Container>
    )
}


export default Calculator