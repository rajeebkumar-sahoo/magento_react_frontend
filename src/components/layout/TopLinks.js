import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './styles/top-links.css'

export default function TopLinks() {

    return (
        <div id="top-links-container">
            <Container fluid>
                <Container fluid>
                    <div id="top-links-box">
                        <ul id="top-links" className="float-right">
                            <li>
                                <a href="#">Default welcome msg!</a>
                            </li>
                            <li>
                                <a href="#">Sign In</a>
                            </li>
                            <li>
                                <span>or</span>
                            </li>
                            <li>
                                <a href="">Create an Account</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
