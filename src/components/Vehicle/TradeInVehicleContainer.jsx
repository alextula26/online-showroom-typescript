import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TradeInVehicle from './TradeInVehicle';
import Preloader from '../commons/Preloader';
import CONST from '../../utils/const';

class TradeInVehicleContainer extends React.Component {
  componentDidMount() {
    const { requestTradeInVehicle } = this.props;
    const vehicleId = this.getCurrentVehicleId();
    requestTradeInVehicle({ vehicleId, typeVehicles: CONST.vehiclesTypes.tradeInVehicles });
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

    return (
      <TradeInVehicle vehicle={vehicle} />
    );
  }
}

const mapStateToProps = (state) => ({
  vehicle: state.tradeInVehiclePage.vehicle,
  loading: state.tradeInVehiclePage.loading,
});

const actionCreators = ({
  requestTradeInVehicle: actions.requestTradeInVehicle,
});

export default compose(
  connect(mapStateToProps, actionCreators),
  withRouter,
)(TradeInVehicleContainer);
