import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import ThemeReducer from '../Theme';

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
    return middlewares;
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
