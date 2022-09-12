import { createAction } from '@ngrx/store';

export const addTask = createAction('[TASK] add');
export const deleteTask = createAction('[TASK] delete');
export const saveTask = createAction('[TASK] save');
