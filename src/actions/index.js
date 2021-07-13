
import { createAction } from '@reduxjs/toolkit';
import * as TYPES from './types';

// Action creators for saga requests
export const requestBrands = createAction(TYPES.REQUEST_BRANDS);
export const requestModels = createAction(TYPES.REQUEST_MODELS);
export const requestNewVehicles = createAction(TYPES.REQUEST_NEW_VEHICLES);
export const requestNewVehicle = createAction(TYPES.REQUEST_NEW_VEHICLE);
export const requestTradeInVehicles = createAction(TYPES.REQUEST_TRADEIN_VEHICLES);
export const requestTradeInVehicle = createAction(TYPES.REQUEST_TRADEIN_VEHICLE);
export const requestAllNewVehicles = createAction(TYPES.REQUEST_ALL_NEW_VEHICLES);

// Action creators for filters
export const addFilterItems = createAction(TYPES.ADD_FILTER_ITEMS);
export const changeFilterState = createAction(TYPES.CHANGE_FILTER_STATE);
export const addSelectItemIdToSelected = createAction(TYPES.ADD_SELECT_ITEM_ID_TO_SELECTED);
export const addFilterDisabledItems = createAction(TYPES.ADD_FILTERDISABLED_ITEMS);
export const addFilterPrice = createAction(TYPES.ADD_FILTER_PRICE);

// Action creators for loaders
export const changeModelsLoader = createAction(TYPES.CHANGE_MODELS_LOADER);
export const changeVehiclesLoader = createAction(TYPES.CHANGE_VEHICLES_LOADER);
export const changeTradeInVehiclesLoader = createAction(TYPES.CHANGE_TRADEIN_VEHICLES_LOADER);