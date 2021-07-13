import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';
import { getTradeInVehiclesContainerData } from '../../selectors';
import PageHeader from '../commons/PageHeader';
import TradeInVehicles from './TradeInVehicles';
import Preloader from '../commons/Preloader';

const TradeInVehiclesContainer = () => {
  const { vehicles, loading } = useSelector((state) => getTradeInVehiclesContainerData(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.requestTradeInVehicles());
  }, [dispatch]);

  const { items, filter } = vehicles;

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <PageHeader header="Автомобили с пробегом" classes="page-title" />
      <TradeInVehicles
        brands={filter.brands}
        models={filter.models}
        vehicles={items}
      />
    </>
  );
};

export default TradeInVehiclesContainer;
