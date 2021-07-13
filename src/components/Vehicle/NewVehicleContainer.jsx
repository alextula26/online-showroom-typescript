import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewVehicle from './NewVehicle';
import Preloader from '../commons/Preloader';
import CONST from '../../utils/const';

class NewVehicleContainer extends React.Component {
  componentDidMount() {
    const { requestNewVehicle } = this.props;
    const vehicleId = this.getCurrentVehicleId();
    requestNewVehicle({ vehicleId, typeVehicles: CONST.vehiclesTypes.newVehicles });
  }

  getCurrentVehicleId() {
    const { match: { params: { vehicleId } } } = this.props;
    return vehicleId;
  }

  render() {
    const { vehicle, loading } = this.props;

    if (loading) {
      return <Preloader />;
    }

    console.log('loading', loading);

    return (
      <NewVehicle vehicle={vehicle} />
    );
  }
}

const mapStateToProps = (state) => ({
  vehicle: state.newVehiclePage.vehicle,
  loading: state.newVehiclePage.loading,
});

const actionCreators = ({
  // fetchVehicle: thunkes.fetchVehicle,
  requestNewVehicle: actions.requestNewVehicle,
});

export default compose(
  connect(mapStateToProps, actionCreators),
  withRouter,
)(NewVehicleContainer);
