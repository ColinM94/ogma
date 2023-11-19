import { createZustandStore } from './createZustandStore';

interface AppState {}

export const useNotificationStore = createZustandStore<AppState>({
  name: 'app',
  data: (set) => ({}),
});
