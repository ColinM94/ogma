import React from 'react';

export const reactReducer = <T>(initialState: T) => {
  return React.useReducer((state: T, updates: Partial<T>) => {
    return { ...state, ...updates };
  }, initialState);
};
