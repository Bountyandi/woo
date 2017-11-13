import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthData, increaseProgress, decreaseProgress } from '../../actions/actions';
import SignupHeader from '../SignupHeader';
import ViewsFsm from '../../actions/ViewsFsmInstance';
import ValidationLabel from '../ValidationLabel';
import Validator from '../../helpers/validator';

import { Form, Input, Label, Button } from 'semantic-ui-react';

class AuthDataScreen extends PureComponent {
  static propTypes = {
    setAuthData: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      email: { val: '', mes: '', isValid: false },
      password: { val: '', mes: '', isValid: false },
      password_confirm: { val: '', mes: '', isValid: false }
    }
  }

  _onChangeEmail = event => {
    this.setState({
      email: {
        ...this.state.email,
        val: event.target.value
      }
    });
  }

  _onBLurEmail = (event) => {
    let validated = Validator.checkEmail(event.target.value);

    this.setState({
      email: {
        ...this.state.email,
        mes: validated.mes,
        isValid: validated.isValid
      }
    });

    if (validated.isValid) {
      this.props.increaseProgress();
    } else if (!validated.isValid && this.state.email.isValid) {
      this.props.decreaseProgress();
    }
  }

  _onChangePassword = (event) => {
    this.setState({
      password: {
        ...this.state.password,
        val: event.target.value
      }
    });
  }

  _onBlurPassword = (event) => {
    let validated = Validator.checkPassword(event.target.value);

    this.setState({
      password: {
        ...this.state.password,
        mes: validated.mes,
        isValid: validated.isValid
      }
    });

    if (validated.isValid) {
      this.props.increaseProgress();
    } else if (!validated.isValid && this.state.password.isValid) {
      this.props.decreaseProgress();
    }
  }

  _onChangePasswordConfirm = (event) => {
    this.setState({
      password_confirm: {
        ...this.state.password_confirm,
        val: event.target.value
      }
    });
  }

  _onBlurPasswordConfirm = (event) => {
    let validated = Validator.checkPasswordConfirm(
      event.target.value,
      this.state.password.val
    );

    this.setState({
      password_confirm: {
        ...this.state.password_confirm,
        mes: validated.mes,
        isValid: validated.isValid
      }
    });

    if (validated.isValid) {
      this.props.increaseProgress();
    } else if (!validated.isValid && this.state.password_confirm.isValid) {
      this.props.decreaseProgress();
    }
  }


  _nextView = (event) => {
    if (this.state.email.isValid &&
      this.state.password.isValid &&
      this.state.password_confirm.isValid
    ) {
      ViewsFsm.transiteNext('PersonalView')
      this.props.setAuthData({
        email: this.state.email.val,
        password: this.state.password.val
      })
    } else {
      console.log('Please complete all required fields');
      // need to handle warning another method
    }
  }


  render() {
    return [
      <SignupHeader
        key='header'
        headerText='Signup' />,
      <div key='content' className='signup-content'>

        <div className='form-container'>

          <div className='field'>
            <label>EMAIL IS REQUIRED</label>
            <Input
              fluid
              value={this.state.email.val}
              onChange={this._onChangeEmail}
              onBlur={this._onBLurEmail}

            />
            <ValidationLabel
              message={this.state.email.mes}
              isValid={this.state.email.isValid}
            />
          </div>

          <div className='field'>
            <label>PASSWORD</label>
            <Input
              fluid
              value={this.state.password.val}
              onChange={this._onChangePassword}
              onBlur={this._onBlurPassword} />
            <ValidationLabel
              message={this.state.password.mes}
              isValid={this.state.password.isValid}
            />
          </div>

          <div className='field'>
            <label>CONFIRM PASSWORD</label>
            <Input
              fluid
              value={this.state.password_confirm.val}
              onChange={this._onChangePasswordConfirm}
              onBlur={this._onBlurPasswordConfirm} />
            <ValidationLabel
              message={this.state.password_confirm.mes}
              isValid={this.state.password_confirm.isValid}
            />
          </div>

        </div>


        { /*
        <Form>
          <Form.Field>
            <label>EMAIL IS REQUIRED</label>

            <Form.Input onChange={ this._onClick } />

            <Label basic color='red'
            pointing='left'>{this.errMessage}</Label>
            <ValidationLabel />
          </Form.Field>
          <Form.Field>
            <label>PASSWORD</label>
            <Form.Input onChange={ this._onClick } />
            <ValidationLabel />
          </Form.Field>

          <Form.Field>
            <label>CONFIRM PASSWORD</label>
            <Form.Input onChange={ this._onClick } />
            <ValidationLabel />
          </Form.Field>


        </Form>
        */ }
      </div>,
      <div
        key='footer'
        className='signup-bottom'>
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

export default connect(mapStateToProps, {
  setAuthData,
  increaseProgress,
  decreaseProgress
})(AuthDataScreen)
