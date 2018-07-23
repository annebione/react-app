import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SectionHeading from '../../components/pure/SectionHeading'
import MainSection from '../../components/pure/MainSection'

const Logo = styled.img`
  display: block;
  width: 300px;
  margin: 0 auto;
`

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO: Lazy-loading for logo image
    return (
      <MainSection>
        <Logo src="./assets/img/logo_lapag.png" alt="Logo LaPag" />
        <SectionHeading>Bem-vindo à LaPag!</SectionHeading>
        <p>Aqui você poderá realizar agendamentos e<br/> acompanhar seus agendamentos já realizados.</p>
      </MainSection>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/schedule')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)