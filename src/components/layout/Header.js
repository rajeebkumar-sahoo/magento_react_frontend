import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './styles/header.css'

export default function Header() {
    return (
        <Container fluid>
            <Container fluid>
                <div id="header">
                    <Row>
                        <Col>
                            <img src="./static/images/logo.svg" alt="Logo" />
                        </Col>
                        <Col style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                            <form>
                                <input type="text" 
                                placeholder="Search entire store here" />
                            </form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Container>
    )
}
