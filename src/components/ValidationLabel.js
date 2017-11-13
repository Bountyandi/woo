import React, { PureComponent } from 'react';

export default class ValidationLabel extends PureComponent {
  render() {
    const { message, isValid } = this.props;
    return (
      <div className='validation-container'>
        <p
          className={isValid ? 'positive' : 'negative'} >
          {message}
          </p>
      </div>
    )
  }
}
