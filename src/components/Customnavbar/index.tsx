import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./index.css";

const index = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="containernav">
        <Navbar.Brand href="/home">
          <img src="logo.jpeg" alt="Hotel Maroc">
                     </img>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/SingleRooms">Chambre Simple </Nav.Link>
          <Nav.Link href="/Rooms">Chambre</Nav.Link>
          <Nav.Link href="/Home">Accueil</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default index;
