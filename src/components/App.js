import React, { PureComponent } from 'react';
import SignupContainer from '../containers/SignupContainer';
import { Container } from 'semantic-ui-react';

export default class App extends PureComponent {

  render() {

    return (
      <Container>
        <SignupContainer />
      </Container>
    )
  }

}
