import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Map } from 'immutable';
import { composeWithDevTools } from 'remote-redux-devtools';
import chernobogImage from './chernobog.jpg';
import 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { ajax } from 'rxjs/observable/dom/ajax';

const learnMoreEpic = action$ =>
  action$
    .ofType('LEARN MORE')
    .mergeMap(action =>
      ajax.getJSON(`/learn`).map(response => learnMoreFulfilled(response))
    );

const learnMoreFulfilled = payload => ({
  type: 'LEARN MORE FULFILLED',
  payload
});

const initialState = new Map({
  title: 'Чернобог (Czorneboh, Czernebog)',
  content: 'В мифологии балтийских славян злой бог, приносящий несчастье.',
  image: chernobogImage
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LEARN MORE FULFILLED':
      return state
        .set('title', action.payload.title)
        .set('content', action.payload.content);
    default:
      return state;
  }
};

const epicMiddleware = createEpicMiddleware(learnMoreEpic);
const enhancer = composeWithDevTools(applyMiddleware(epicMiddleware));
const store = createStore(reducer, initialState, enhancer);

export default store;
