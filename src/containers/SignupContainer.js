import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthDataView from '../components/authViews/AuthDataView';
import PersonalView from '../components/authViews/PersonalView';
import ThanksView from '../components/authViews/ThanksView';

import styles from '../index.scss';


class SignupContainer extends PureComponent {
  //static propTypes = {
  //  terminos: PropTypes.array.isRequired,
  //};

  render() {

    console.log(styles)

    this.view = '';

    switch (this.props.currentView) {
      case 'AuthDataView':
        this.view = <AuthDataView />;
        break;
      case 'PersonalView':
        this.view = <PersonalView />;
        break;
      case 'ThanksView':
        this.view = <ThanksView />;
        break;
    }



    return(
      <div className='signup-container'>

        {/*<SignupHeader />*/}


          { this.view }



      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentView: state.currentView
  }
}

export default connect(mapStateToProps, {SignupContainer})(SignupContainer)
