import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Modal, Card } from 'react-bootstrap';

type Props = {
  handleSearch: () => Promise<void>;
  handlePersonal: () => void;
  activeTab: string;
};

const MyNavbar = ({ handleSearch, handlePersonal, activeTab }: Props) => {
  // for Contacts
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // for Sobre nosotros
  const [showAboutModal, setShowAboutModal] = useState(false);

  // for OpenAI
  const [showOpenAIModal, setShowOpenAIModal] = useState(false);

  // for Contacts
  const handleCloseModal = () => setShowModal(false);

  // for Sobre nosotros
  const handleCloseAboutModal = () => setShowAboutModal(false);

  // for Open AI
  const handleCloseAboutOpenAI = () => setShowOpenAIModal(false);

  // for contactanos
  const handleShowModal = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  // for Sobre nosotros
  const handleShowAboutModal = () => setShowAboutModal(true);

  // for Open AI
  const handleShowOpenAIModal = () => setShowOpenAIModal(true);

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src="/chat.png" alt="foto logo" width={400} height={400} style={{ width: "400px", height: "300px" }}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={activeTab} style={{ backgroundColor: '#5e9af2', color: 'white', padding: '10px', letterSpacing: '10px', fontSize: '8px', borderRadius: '5px' }}>
            <Nav.Link onClick={handleShowOpenAIModal} style={{ fontSize: '17px', color: 'white', marginRight: '20px', fontWeight: 'bold' }}>
              OpenAI
            </Nav.Link>
            <Nav.Link onClick={handleShowAboutModal} style={{ fontSize: '17px', color: 'white', marginRight: '20px', fontWeight: 'bold' }}>
              About us
            </Nav.Link>
            <Nav.Link href="#" onClick={() => handleShowModal("/contactus.png")} style={{ fontSize: '17px', color: 'white', marginRight: '20px', fontWeight: 'bold' }}>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Modal para Contactanos */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#5e9af2', color: 'white', padding: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>Contact us</h1>
          <button onClick={handleCloseModal} style={{ backgroundColor: '#9f6cba', color: 'white', fontSize: '1.2em', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h1>welcome to our app</h1>
            <p>In this application we will consume the OpenAI API</p>
            <img src="/contactenos.png" alt="Contactenos" style={{ maxWidth: '300px' }} />
            <p>You can contact us through:</p>
            <ul>
              <li>Telephone: 61330764, 87230078</li>
              <li>Email: aaron.barboza.amador@est.una.ac.cr, allison.victor.vasquez@est.una.ac.cr</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>

      {/* about us */}
      <Modal show={showAboutModal} onHide={handleCloseAboutModal} size="lg" centered>
        <div style={{ padding: '20px' }}>
          <Modal.Header closeButton style={{ backgroundColor: '#5e9af2', color: 'white', padding: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ backgroundColor: '#5e9af2', color: 'white', padding: '5px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', textAlign: 'center', fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
              About us
            </h1>
            <button onClick={handleCloseAboutModal} style={{ backgroundColor: '#9f6cba', color: 'white', fontSize: '1.2em', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
              Close
            </button>
          </Modal.Header>
          <Modal.Body>
            <Card style={{ width: '100%', textAlign: 'center' }}>
              <Card.Img src="/pregunta.png" alt="Preguntas" style={{ maxWidth: '300px', maxHeight: '50vh', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5em' }}>
                 This app was created by us and allows you to enter a topic to generate a list of important questions and their answers.
                </Card.Title>
              </Card.Body>
            </Card>
          </Modal.Body>
        </div>
      </Modal>

      {/* Modal para OpenAI*/}
      <Modal show={showOpenAIModal} onHide={handleCloseAboutOpenAI} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#5e9af2', color: 'white', padding: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ backgroundColor: '#5e9af2', color: 'white', padding: '5px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)', textAlign: 'center', fontSize: '1.5em', fontFamily: 'Arial, sans-serif' }}>
            OpenAi
          </h1>
          <button onClick={handleCloseAboutOpenAI} style={{ backgroundColor: '#9f6cba', color: 'white', fontSize: '1.2em', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
            Close
          </button>
        </Modal.Header>
        <Modal.Body>
          <h1 style={{ fontSize: '1.5em', textAlign: 'center' }}>Aquí se brinda información sobre OpenAI</h1>
          <Card style={{ width: '100%', textAlign: 'center' }}>
              <Card.Img src="/chat2.png" alt="Chat" style={{ maxWidth: '300px', maxHeight: '50vh', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5em' }}>
                 OpenAI is an artificial intelligence company that develops technologies like ChatGPT, an advanced language model with conversation capability. ChatGPT is capable of generating coherent and contextual responses, facilitating interaction with users in various scenarios.
                </Card.Title>
              </Card.Body>
            </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyNavbar;
