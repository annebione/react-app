import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Scheduling from '../scheduling'
import Schedule from '../schedule'

import Header from '../../components/pure/Header'
import Container from '../../components/pure/Container'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Header>
          <Link to="/">Página Inicial</Link>
          <Link to="/scheduling">Agendamento</Link>
          <Link to="/schedule">Agenda</Link>
        </Header>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/scheduling" component={Scheduling} />
          <Route exact path="/schedule" component={Schedule} />
        </Container>
      </main>
    )
  }
}


export default Layout