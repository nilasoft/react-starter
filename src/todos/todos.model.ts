import { AsyncState } from '../app/app.model';

export interface Todo {

  id: string;

  title: string;

  body: string;

  complete: AsyncState<boolean>;

}
