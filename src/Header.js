import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';



function Header(){
    let user = JSON.parse(localStorage.getItem("user-info"))
    const navigate = useNavigate()
    function logout(){
      localStorage.clear()
      navigate('/login')
    }
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">E-comm</Navbar.Brand>
            <Nav className="me-auto navbar-wrapper">
                  <Link to="/">Home</Link>
            </Nav>

          </Container>
        </Navbar>
      </div>
    );
}

export default Header