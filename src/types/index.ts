// Types for action creators of saga requests
export const REQUEST_HELLO_SAGA = 'SAGA/REQUEST_HELLO_SAGA';
export const REQUEST_BRANDS = 'SAGA/REQUEST_BRANDS';
export const REQUEST_MODELS = 'SAGA/REQUEST_MODELS';
export const REQUEST_NEW_VEHICLES = 'SAGA/REQUEST_NEW_VEHICLES';
export const REQUEST_NEW_VEHICLE = 'SAGA/REQUEST_NEW_VEHICLE';
export const REQUEST_TRADEIN_VEHICLES = 'SAGA/REQUEST_TRADEIN_VEHICLES';
export const REQUEST_TRADEIN_VEHICLE = 'SAGA/REQUEST_TRADEIN_VEHICLE';
export const REQUEST_ALL_NEW_VEHICLES = 'SAGA/REQUEST_ALL_NEW_VEHICLES';

// Types for action creators of filters
export const CHANGE_FILTER_STATE = 'CHANGE_FILTER_STATE';
export const ADD_FILTER_ITEMS = 'ADD_FILTER_ITEMS';
export const ADD_SELECT_ITEM_ID_TO_SELECTED = 'ADD_SELECT_ITEM_ID_TO_SELECTED';
export const ADD_FILTERDISABLED_ITEMS = 'ADD_FILTERDISABLED_ITEMS';
export const ADD_FILTER_PRICE = 'ADD_FILTER_PRICE';

// Types for action creators of loaders
export const CHANGE_MODELS_LOADER = 'CHANGE_MODELS_LOADER';
export const CHANGE_VEHICLES_LOADER = 'CHANGE_VEHICLES_LOADER';
export const CHANGE_TRADEIN_VEHICLES_LOADER = 'CHANGE_TRADEIN_VEHICLES_LOADER';

// reducer slices
export interface LoadingPayloadActionType {
  loading: boolean
}

export interface BrandsPayloadActionType {
  brands: Array<BrandsType>
}

export interface ModelsPayloadActionType {
  models: Array<ModelsType>
  brand: BrandType
}

export interface NewVehiclesPayloadActionType {
  vehicles: Array<VehiclesType>
  model: ModelType
  brand: BrandType
}

export interface NewVehiclePayloadActionType {
  vehicle: VehicleType
}

export interface TradeInVehiclesPayloadActionType {
  tradeInVehicles: Array<VehiclesType>
}

export interface TradeInVehiclePayloadActionType {
  vehicle: VehicleType
}

// sagas

export interface ModelsPayloadType {
  brandId: number
}

// commons 

export interface BrandsType {
  id: number,
  logo: string,
  name: string,
  vehicles: number,
}

export interface BrandType {
  id: number,
  name: string,
}

export interface ModelType {
  id: number,
  name: string,
}

export interface ModelsType {
  body_type: string
  has_discounts: boolean
  has_shares: boolean
  id: number
  image: string
  is_hidden: boolean
  min_price: string
  name: string
}

interface StatusType {
  id: number 
  name: string
}

interface DealershipType {
  address: string
  can_support: boolean
  email: string
  id: number
  name: string
  phone: string
  phone_mask: string
  site: string
}

export interface VehiclesType {
  body_type: string
  brand_id: number
  brand_name: string
  color: number
  color_name: string
  complectation_name: null | string
  equipment: number
  equipment_name: string
  id: number
  image: string
  image_preview: string
  min_price: number
  model_id: number
  model_name: string
  modification: number
  modification_name: string
  price: number
  ref_model_id: number
  ref_model_name: string
  special_price: number
  status: StatusType
  vin: string
}

export interface VehicleType {
  additional_equipment_description: null | string
  additional_options: null | string
  body_type: string
  brand_id: number
  brand_name: string
  color: string
  complectation_name: string
  dealership: DealershipType
  description: string
  discounts: null | number
  equipment: string
  id: number
  min_price: number
  model_id: number
  model_name: string
  modification_id: number
  modification_name: string
  price: number
  pts_type: null | number
  ref_model_id: number
  ref_model_name: string
  skin: string
  special_price: number
  status: StatusType
  stock_type: boolean
  vin: string
}
