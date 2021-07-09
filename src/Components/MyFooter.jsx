import { Button, Col, Container, Row} from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

const MyFooter = () => (
    <Container fluid style={{background: "black"}}>
        <Container style={{ paddingLeft: "4rem", paddingBottom: "0.3rem", paddingTop: "2rem"}}>
        <Row className="mb-3">
            <Col>
            <a href="https://www.facebook.com/netflix"><Facebook style={{color: "rgb(117, 117, 117)"}} size= {30} /></a>
            <a href="https://www.instagram.com/netflixfilm/?hl=en"><Instagram className="mx-3" style={{color: "rgb(117, 117, 117)"}} size= {30} /></a>
            <a href="https://twitter.com/netflixfilm?lang=en"><Twitter style={{color: "rgb(117, 117, 117)"}} size= {30} /></a>
            <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw"><Youtube className="mx-3" style={{color: "rgb(117, 117, 117)"}} size= {30} /></a>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col>
                <a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Audio and Subtitles</a>
            </Col>
            <Col>
            <a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Audio Description</a>
            </Col>
            <Col>
            <a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Help Center</a>
            </Col>
            <Col>
            <a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Gift Cards</a>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Media Center</a></Col>
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Investors Relations</a></Col>
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Jobs</a></Col>
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Terms of Use</a></Col>
        </Row>
        <Row className="mb-3">
        <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Privacy</a></Col>            
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Legal Notices</a></Col>
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Cookie Preferences</a></Col>
            <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Corporate Information</a></Col>
        </Row>
        <Row className="mb-3">
        <Col><a href="#" style={{color: "rgb(117, 117, 117)", textDecorationLine: "none"}}>Contact Us</a></Col>
       
        </Row>
       
        <Row>
        <Col><Button className="mt-3" variant="outline-dark" style={{ border: "1px solid", borderRadius: "0px", color: "rgb(117, 117, 117)"}}>Service Code</Button></Col>
        </Row>
        <Row>
        <Col>
        <p className="mt-3" style={{ color: "rgb(117, 117, 117)"}}>{"© 1997-2019 Netflix, Inc {i-0d00fcda2fdf9c0de}"}</p>
        </Col>
        </Row>
        </Container>
    </Container>
)

export default MyFooter