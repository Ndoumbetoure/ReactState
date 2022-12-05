// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


function NavComponent() {

  return (
    <Card className="text-center">
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first" className='App-head' >
          <Nav.Item>
            <Nav.Link href="#first"  className='NavLink'>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link"  className='NavLink'>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled  className='NavLink'>
              WORK
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link"  className='NavLink'>BLOG</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link"  className='NavLink'>CONTACT</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
    </Card>
  );
}

export default NavComponent;