import React, { PureComponent } from 'react';
import { Progress } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProgressBar extends PureComponent {
  static propTypes = {
    progressValue: PropTypes.number.isRequired,
  };

  render() {

    const { progressValue } = this.props;

    return(
      <div className='progress-bar'>
        <Progress
          //active
          value={progressValue}
          total='5'
          progress='ratio'
          color='blue' />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    progressValue: state.progressValue
  }
}

export default connect(mapStateToProps, null)(ProgressBar)
