import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">BLUE ROSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Company" id="company">
        <NavDropdown.Item href="#action/1.1">Know Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.2">Free Publishing</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.3">Our Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.4">Our Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.5">Work With Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.6">FAQs</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.7">Our Imprints</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.8">Partners</NavDropdown.Item>
        <NavDropdown.Item href="#action/1.9">Contact Us</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link1">Package</Nav.Link>
      <NavDropdown title="Store" id="basic-nav-Store">
        <NavDropdown.Item href="#action/2.1">Book Store</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.2">Designs</NavDropdown.Item>
        <NavDropdown.Item href="#action/2.3">Merchandise</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link2">Calculate Royalty</Nav.Link>
      <NavDropdown title="Community" id="basic-nav-Store">
        <NavDropdown.Item href="#action/3.1">Litgleam</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Giveaways</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contests</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Blog</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

const Hero = () => {
  return (
    <div className="hero">
      <h1>Calculate Royalty</h1>
      <p style={{marginBottom: '40px'}}>Why settle for less when you can get the absolute best</p>
      <div 
        style={{
        height: '40%', 
        width: '85%', 
        backgroundColor: 'rgba(45,62,80,0.7)',
        marginBottom: '25px',
        borderTop: '2px solid black',
        position: 'relative',
        display: 'flex',
        }}
      >
        <div style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          background: 'rgba(45,62,80,0.9)',
          borderRadius: '50%',
          top: -15,
          left: -35,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#5ac7d4',
          fontSize: '28px'
        }}>1</div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', width: '65%', padding: '10px'}}>
          <p style={{ width: '100%', fontWeight: 'bold', color: '#fff'}}>ENTER SPECIFICATIONS AND HIT >> TO CALCULATE THE PRODUCTION COST</p>
        <form style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
          <select style={{padding: '10px', margin: '5px'}}>
            <option>BOOK FORMAT</option>
            <option>Paperback</option>
            <option>Hardbound</option>
          </select>
          <select style={{width: '75px', padding: '10px', margin: '5px'}}>
            <option>SIZE</option>
            <option>5 x 8</option>
            <option>6.15 x 9.15</option>
            <option>7.25 x 9.5</option>
            <option>8.5 x 11</option>
          </select>
          <input placeholder="BLACK & WHITE PAGES" style={{width: '175px', padding: '10px', margin: '5px'}} />
          <input placeholder="COLOURED PAGES" style={{width: '150px', padding: '10px', margin: '5px'}} />
        </form>
        </div>
        <div style={{width: '10%', fontSize: '36px', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><button style={{width: '65px', height: '65px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '2px solid #efd147', backgroundColor: 'transparent', color: '#efd147'}}>>></button></div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', width: '25%', position: 'absolute', right: -25}}>
          <div style={{display: 'flex', height: '35px'}}><label style={{color: '#fff'}}>PRODUCTION COST (EXCLUSIVE OF GST)</label><input style={{width: '125px',padding: '10px'}} /></div>
          <div style={{display: 'flex', height: '35px'}}><label style={{color: '#fff'}}>MINIMUM SALES PRICE</label><input style={{width: '125px',padding: '10px'}} /></div>
        </div>
      </div>
      <div 
        style={{
        height: '40%', 
        width: '85%', 
        backgroundColor: 'rgba(45,62,80,0.7)',
        marginBottom: '25px',
        borderTop: '2px solid black',
        position: 'relative',
        display: 'flex',
        }}
      >
        <div style={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          background: 'rgba(45,62,80,0.9)',
          borderRadius: '50%',
          top: -15,
          left: -35,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#5ac7d4',
          fontSize: '28px'
        }}>1</div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', width: '35%', padding: '10px'}}>
          <p style={{ width: '100%', fontWeight: 'bold', color: '#fff'}}>ENTER MRP AND HIT >> TO KNOW ROYALTY</p>
        <form style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
          <input placeholder="MRP" style={{width: '150px', padding: '10px', margin: '5px'}} />
        </form>
        </div>
        <div style={{width: '10%', fontSize: '36px', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><button style={{width: '65px', height: '65px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '2px solid #efd147', backgroundColor: 'transparent', color: '#efd147'}}>>></button></div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%', width: '55%', position: 'absolute', right: -25}}>
          <div style={{display: 'flex', height: '45px', alignItems: 'center'}}><label style={{color: '#fff', marginRight: '30px'}}>ROYALTY ON BLUE ROSE</label><input style={{width: '125px',padding: '10px', margin: '5px'}} /><input style={{width: '125px',padding: '10px', margin: '5px'}} /><input style={{width: '125px',padding: '10px', margin: '5px'}} /></div>
          <div style={{display: 'flex', height: '45px', alignItems: 'center'}}><label style={{color: '#fff'}}>ROYALTY ON OTHER STORES</label><input style={{width: '125px',padding: '10px', margin: '5px'}} /><input style={{width: '125px',padding: '10px', margin: '5px'}} /><input style={{width: '125px',padding: '10px', margin: '5px'}} /></div>
        </div>
      </div>
    </div>
  )
}

const Notes = () => {
  return (
    <div style={{backgroundColor: '#ddb77e', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <p>*The production cost of colored books may vary depending upon the page sequence and color content ratio.</p>
      <p>*The production cost in the calculator is exclusive of 12% GST and a handling fee of ₹ 15.</p>
      <p>*Production cost and minimum selling price are subject to change.</p>
    </div>
  )
}

const Terminology = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
      <h2>TERMINOLOGIES</h2>
      <div style={{width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Self-Publishing">
          <p>Publishing the work independently without sharing the copyrights with anyone. With the advent of digital printing and POD (Print-On- Demand ) methodology, the power is swung in the hands of the authors and they can publish their dream works exactly the way they always wanted. This allows the authors to control the entire creative and marketing strategies.</p>
        </Tab>
        <Tab eventKey="profile" title="POD">
          <p>Printing copies only when demanded. This allows to keep a virtual or a miniscule stock and saves a fortune on the production, helping our authors a great deal in framing the entire publication at an extremely reasonable costing and focus more on widening the reach and making their books popular.</p>
        </Tab>
        <Tab eventKey="contact" title="Production Cost">
          <p>The base cost at which the books are printed is called the production cost. Only the Blue Rose authors are entitled to get copies at the production cost plus levied taxes.</p>
        </Tab>
        <Tab eventKey="msp" title="MSP">
          <p>Minimum Selling Price is the least possible selling price of the book, suggested by our experts. This depends entirely on the book specifications entered in our calculator.</p>
        </Tab>
        <Tab eventKey="mrp" title="MRP">
          <p>To get the desired royalty amount, Blue Rose allows the authors to name the price of their works. Authors can come down in favor of an MRP anything equal to or greater than the MSP. Give it a whirl and settle for what you deserve –The Best, of course!</p>
        </Tab>
        <Tab eventKey="royalty" title="Royalty">
          <p>The sum paid to the author for each copy sold in the market. This is generally a small part of the profit but with Blue Rose, it is one hundred percent of the total profit earned.</p>
        </Tab>
      </Tabs>
      </div>
    </div>
  )
}

const Faq = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '50px'}}>
    <h2>FAQ</h2>
    <div style={{width: '75%'}}>
    <Accordion defaultActiveKey="0">
    <div>
      <Accordion.Toggle as={Button}  variant="link" eventKey="0">
        How many copies are printed in the first lot?
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <p style={{padding: '6px 12px'}}>This is one question every author craves an answer to. Blue Rose, just like any other self-publishing platform, works on the POD methodology and maintains a small stock. Our experts keep a close check on the sales trend and reinstate the stock as soon as it threatens to run out.</p>
      </Accordion.Collapse>
    </div>
    <div>
      <Accordion.Toggle as={Button}  variant="link" eventKey="1">
      Can I order more copies at the production cost?
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <p style={{padding: '6px 12px'}}>Yes, you certainly are entitled to get copies at the production cost plus the applicable taxes.</p>
      </Accordion.Collapse>
    </div>
    <div>
      <Accordion.Toggle as={Button}  variant="link" eventKey="2">
      How come the royalty on Blue Rose store better than other marketplaces like Amazon?
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <p style={{padding: '6px 12px'}}>Simply, because we do not charge any commission on the sales. Marketplaces like Amazon and Flipkart
charge a huge commission for selling through their portals and hence the royalty on the sales through
these platforms is less as compared to our store.</p>
      </Accordion.Collapse>
    </div>
    <div>
      <Accordion.Toggle as={Button}  variant="link" eventKey="3">
      What is the difference between Royalty and Profit?
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3">
        <p style={{padding: '6px 12px'}}>Profit = Selling price – ( Cost price + Handling fee + Distribution and transportation charges ) Royalty is the total share in the profit.With Blue Rose, you get to keep one hundred percent of the total profit.</p>
      </Accordion.Collapse>
    </div>
    </Accordion>
    </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Notes />
      <Terminology />
      <Faq />
    </div>
  );
}
