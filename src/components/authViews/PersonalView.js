import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPersonalData, switchView } from '../../actions/actions';
import { attractionCanalsData } from '../../helpers/attractionCanalsData';
import SignupHeader from '../SignupHeader';
import ViewsFsm from '../../actions/ViewsFsmInstance';

import {
  Input,
  Select,
  Button
} from 'semantic-ui-react';

class PersonalView extends PureComponent {
  //static propTypes = {
  //  terminos: PropTypes.array.isRequired,
  //};

  _onClick = (event) => {
    console.log(event)
  }

  _nextView = (event) => {
    //this.props.switchView('ThanksView')
    ViewsFsm.transiteNext('PersonalView');
  }

  _backView = (event) => {
    //this.props.switchView('ThanksView')

    ViewsFsm.transiteBack('PersonalView');

  }

  render() {

    return [
      <SignupHeader
        key='header'
        headerText='Signup' />,
      <div key='content' className='signup-content'>

        <label>DATE OF BIRTH</label> <br />

        <Input placeholder='DD' />
        <Input placeholder='MM' />
        <Input placeholder='YYYY' />

        <br /><label>GENDER</label><br />

        <Button.Group color='blue'>
          <Button>MALE</Button>
          <Button>FEMALE</Button>
          <Button>UNSPECIFIED</Button>
        </Button.Group>

        <br /><label>WHERE DID YOU HEAR ABOUT US</label><br />
        <Select
          options={ attractionCanalsData } />
      </div>,
      <div
        key='footer'
        className='signup-bottom'>
        <Button basic onClick={ this._backView } content='Back' />
        <Button basic onClick={ this._nextView } content='Next ->' />
      </div>
    ]
  }
}


function mapStateToProps(state) {
  return {
    authData: state.authData
  }
}

export default connect(mapStateToProps, { setPersonalData, switchView })(PersonalView)

