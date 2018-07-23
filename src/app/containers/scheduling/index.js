// Third party imports
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Component imports
import  * as actions from './SchedulingActions'
import ServiceDuration from './ServiceDuration'
import AvailableHours from './AvailableHours'
import { 
  SearchResults,
  WrapperDiv,
  Field, 
  Select,
  CenteredForm
} from './styles'

// Shared components imports
import SectionHeading from '../../components/pure/SectionHeading'
import Button from '../../components/pure/Button'
import MainSection from '../../components/pure/MainSection'
import TextInput from '../../components/stateful/TextInput'

class Scheduling extends React.Component {

  constructor(props) {
    super(props);
    this.originalState = this.state;

    this.state = {
      clientValue: '',
      hasClients: false,
      professionalValue: ''
    };
    this.schedule = {
      uid: Math.random(),
      client_name: '',
      professional_name: {},
      datetime: '',
      service_name: {},
      duration: ''
    }
  } 

  componentWillMount() {
    this.props.proFetch();
  }

  componentWillUnmount() {
    this.setState(this.originalState)
  }

  clientSearch = element => {
    this.setState({clientValue: element.target.value});
    this.props.clientFetch(this.state.clientValue);

    //TODO: What if the search doesn't find any client?

    if (this.props.client.length > -1) {
      this.setState({hasClients: true});
    }
  }

  professionalSearch = element => {
    this.setState({professionalValue: element.target.value});
    this.props.clientFetch(this.state.professionalValue);
  }

  setClient = client => {
    this.setState({clientValue: client.name.toUpperCase(), hasClients: false });
    this.schedule.client_name = client.name;
  }
  setProfessional = element => {
    this.props.servicesFetch(this.props.professionals[element.target.value]);
    this.schedule.professional_name = this.props.professionals[element.target.value].name
  }

  setService = element => {
    this.schedule.service_name = this.props.services[element.target.value].name
  }

  setTime = element => {
    this.schedule.datetime = AvailableHours[element.target.value].value
  }

  setDuration = element => {
    this.schedule.duration = ServiceDuration[element.target.value].value
  }
  setSchedule = () => {
     this.props.scheduleService(this.schedule);
     this.setState(this.originalState)
  }


  render() {
    return (
      <MainSection>
        <SectionHeading>Agendamento</SectionHeading>
        <p>Preencha o formulário abaixo para agendar um serviço</p>
        <CenteredForm autocomplete="false">
          <TextInput 
            name="Cliente" 
            label="Buscar Cliente"
            onChange={this.clientSearch.bind(this)}
            value={this.state.clientValue}
            placeholder="Insira o nome do cliente.."
          />
          { this.state.hasClients ? 
            <SearchResults>
              <ul>
                {
                  this.props.client.map(key => <li onClick={this.setClient.bind(this, key) }> {key.name.toUpperCase()} </li>)
                }
              </ul>   
            </SearchResults> 
          : null }
          <WrapperDiv>
            <Field>
              <Select
                name="Profissionais"
                label="Selecionar Profissional"
                onChange={this.setProfessional.bind(this)}
              >
                <option>Selecione um profissional</option>
                {
                  this.props.professionals.map((key, index) => <option value={index}> {key.name} </option>)
                }
              </Select>
            </Field>
          </WrapperDiv>
          <WrapperDiv>
            <Field>
              <Select
                name="Horário"
                label="Selecionar o horário"
                onChange={this.setTime.bind(this)}
              >
                <option>Selecionar horário</option>
                {
                 AvailableHours.map((key, index) => <option value={index}> {key.name} </option>)
                }
              </Select>
            </Field>
          </WrapperDiv>
          <WrapperDiv>
            <Field>
              <Select
                name="Serviços"
                label="Selecionar o serviço"
                onChange={this.setService.bind(this)}
              >
                <option>Selecione um serviço</option>
                {
                  this.props.services.map((key, index) => <option value={index}> {key.name} </option>)
                }
              </Select>
            </Field>
          </WrapperDiv>
          <WrapperDiv>
            <Field>
              <Select
                name="Serviços"
                label="Selecionar o serviço"
                onChange={this.setDuration.bind(this)}
              >
                <option>Selecionar duração</option>
                {
                 ServiceDuration.map((key, index) => <option value={index}> {key.name} </option>)
                }
              </Select>
            </Field>
          </WrapperDiv>
        </CenteredForm>
        <Button children="Agendar"
             color="#ffff" 
             type="submit"
             backgroundColor="#8874C9;"
             onClick={this.setSchedule.bind(this)}
          >
          </Button>
      </MainSection>
    )
  }
}

this.propTypes = {
  client: PropTypes.array,
  professionals: PropTypes.array,
  services: PropTypes.array,
  clientFetch: PropTypes.func,
  proFetch: PropTypes.func,
  servicesFetch: PropTypes.func,
  scheduleService: PropTypes.func
};    


const mapStateToProps = state => ({
  client: state.scheduling.client,
  professionals: state.scheduling.professionals,
  services: state.scheduling.services
})

const mapDispatchToProps = dispatch => bindActionCreators({
  clientFetch: (name) => actions.clientFetch(name),
  proFetch: () => actions.professionalsFetch(),
  servicesFetch: (professional) => actions.servicesFetch(professional),
  scheduleService: (schedule) => actions.scheduleService(schedule)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduling)