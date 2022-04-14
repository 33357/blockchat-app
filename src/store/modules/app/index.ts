import actions from './actions';
import state, { AppState } from './state';
import { Module } from 'vuex';
import { RootState } from '../../index';

const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  actions,
};

export default app;
