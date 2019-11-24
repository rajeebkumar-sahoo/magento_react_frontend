import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../../store/actions/apollo-client'
import { Container, Row, Col } from 'react-bootstrap'
import store from '../../store'
import TopNavigation from './layout/TopNavigation';
import Category from './catalog/Category'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={apolloClient}>
                    <TopNavigation />
                    <Container fluid="true">
                        <Row>
                            <Col sm={3}>
                                <h3>Layered Navigation</h3>
                            </Col>
                            <Col sm={9}>
                                <Category />
                            </Col>
                        </Row>
                    </Container>
                </ApolloProvider>
            </Provider>
        )
    }
}

export default App
