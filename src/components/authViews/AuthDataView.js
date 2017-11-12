import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthData, switchView } from '../../actions/actions';
import SignupHeader from '../SignupHeader';
import ViewsFsm from '../../actions/ViewsFsmInstance';

import { Form, Input, Label, Button } from 'semantic-ui-react';

class AuthDataScreen extends PureComponent {
  static propTypes = {
    setAuthData: PropTypes.func.isRequired
  };

  _nextView = (event) => {
    debugger
    //this.props.switchView('PersonalView')
    ViewsFsm.transiteNext('PersonalView');

  }

  render() {
    return [
      <SignupHeader
        key='header'
        headerText='Signup' />,
      <div key='content' className='signup-content'>
        <Form>
          <Form.Field>
            <label>EMAIL IS REQUIRED</label>

            <Form.Input
              onChange={ this._onClick } />
            { /*          <Label
            basic
            color='red'
            pointing='left'>{this.errMessage}</Label>*/ }

          </Form.Field>
          <Form.Field>
            <label>PASSWORD</label>

            <Form.Input
              onChange={ this._onClick } />
          </Form.Field>

          <Form.Field>
            <label>CONFIRM PASSWORD</label>

            <Form.Input
              onChange={ this._onClick } />
          </Form.Field>


        </Form>
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

export default connect(mapStateToProps, { setAuthData, switchView })(AuthDataScreen)


/*
render() {
    return(
      <Form>
        <Form.Field>
          <label>EMAIL IS REQUIRED</label>

          <Form.Input
            onChange={this._onClick}/>
{/!*          <Label
            basic
            color='red'
            pointing='left'>{this.errMessage}</Label>*!/}

        </Form.Field>
        <Form.Field>
          <label>PASSWORD</label>

          <Form.Input
            onChange={this._onClick}/>
        </Form.Field>

        <Form.Field>
          <label>CONFIRM PASSWORD</label>

          <Form.Input
            onChange={this._onClick}/>
        </Form.Field>

      </Form>

    )
  }
  */


