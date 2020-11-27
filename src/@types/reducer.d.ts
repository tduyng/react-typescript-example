import { RootReducer } from 'src/reducer';

declare global {
  type AppState = ReturnType<typeof RootReducer>;
}
