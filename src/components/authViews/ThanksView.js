import React, { PureComponent } from 'react';
import SignupHeader from '../SignupHeader';
import {
  Button,
  Image,
  Container
} from 'semantic-ui-react';


export default class ThanksView extends PureComponent {

  render() {
    return [
      <SignupHeader
        key='header'
        headerText='Signup' />,
      <div key='content' className='signup-content'>
        <Image
          src='http://www.clipartbest.com/cliparts/yco/ejr/ycoejrKMi.png'
          size='small' />

        <Button
          basic
          color='blue'
          //onClick={}
          content='Go to Dashboard ->'
        />

      </div>
    ]
  }
}
