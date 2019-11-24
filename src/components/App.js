import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import apolloClient from '../../store/actions/apollo-client'
import { Container, Row, Col } from 'react-bootstrap'
import store from '../../store'
import TopLinks from './layout/TopLinks'
import Header from './layout/Header'
import TopNavigation from './layout/TopNavigation';
import Category from './catalog/Category'
import Breadcrumbs from './layout/Breadcrumbs'
import PageHeader from './layout/PageHeader'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={apolloClient}>
                    <TopLinks />
                    <Header />
                    <TopNavigation />
                    <Container fluid="true">
                        <Container fluid="true">
                            <Row>
                                <Breadcrumbs style={{backgroundColor: "none"}}/>
                            </Row>
                            <Row>
                                <PageHeader />
                            </Row>
                            <Row>
                                <Col sm={3}>
                                    <h5>Layered Navigation</h5>
                                </Col>
                                <Col sm={9}>
                                    <Category />
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </ApolloProvider>
            </Provider>
        )
    }
}

export default App
