import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ПДMixin
} from '../mixins/regenerated/models/i-i-s-test2-п-д';

import СотрудникиModel from './i-i-s-test2-сотрудники';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-test2-сотрудники';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СотрудникиModel.extend(ПДMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
