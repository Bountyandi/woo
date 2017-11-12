import React, { PureComponent } from 'react';
import ProgressBar from '../containers/ProgressBar';

export default class SignupHeader extends PureComponent {
  render() {
    const { headerText } = this.props.headerText;
    return (
      <div className='signup-header'>
        <div className='header-title'>
          {headerText}
        </div>
        <ProgressBar />
      </div>
    )
  }
}
