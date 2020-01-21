import { combineReducers } from '@reduxjs/toolkit';

import galleryReducer from './gallerySlice';
import vrPinReducer from './vrPinSlice';

export const rootReducer = combineReducers({
  galleryData: galleryReducer,
  vrPin: vrPinReducer,
});
