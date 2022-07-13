import { createFeatureSelector } from '@ngrx/store';
import { IFormDataState } from './form-data';

export const formDataCenterStateKey: string = 'formDataCenter';

export interface FormDataCenterState {
    data: IFormDataState
}

export const selectFormDataCenter = createFeatureSelector<any, FormDataCenterState>(formDataCenterStateKey);