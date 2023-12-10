import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ПДMixin
} from '../mixins/regenerated/models/i-i-s-test2-п-д';

import СотрудникиModel from './i-i-s-test2-сотрудники';

let Model = СотрудникиModel.extend(ПДMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
