import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


import CardWidget from ".//CardWidget";



function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img src='image_clemen/clementina logo letras.jpg' alt='clementina mandarina ropa para chicos con actitud'></img> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/SobreMi">Sobre Mi</Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vestidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Bebes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            {/* <Nav.Link eventKey={2} href="#memes">
                Carrito
                <BsFillCartFill/>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

        
            

      </Container>
      <div>
         <CardWidget/>
        </div>

        
    </Navbar>
  );
    
}

export default CollapsibleExample;