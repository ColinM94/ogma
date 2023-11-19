import { create } from 'zustand';
import { PersistOptions, createJSONStorage, persist } from 'zustand/middleware';
import { SetStoreState } from './types';

interface Config<T> extends Omit<PersistOptions<T>, 'partialize'> {
  name: string;
  data: (set: SetStoreState<T>) => T;
  /** Store state in local storage */
  persistState?: boolean;
  // partialize?: (state: T) => Partial<T>;
}

export const createZustandStore = <T>(config: Config<T>) => {
  const { name, data, persistState, ...rest } = config;

  if (!persistState) {
    const store = create<T>((set) => data(set));
    return store;
  }

  const persistOptions: PersistOptions<T> = {
    name: name,
    storage: createJSONStorage(() => localStorage),
    // partialize: partialize as any,
    ...rest,
  };

  const store = create(persist((set) => data(set), persistOptions));
  return store;
};
