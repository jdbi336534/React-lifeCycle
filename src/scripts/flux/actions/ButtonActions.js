import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
  addNewItem(text){
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  }
}
