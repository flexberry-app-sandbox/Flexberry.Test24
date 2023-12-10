import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('string'),
  серия: DS.attr('string')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-test2-п-д.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серия: {
    descriptionKey: 'models.i-i-s-test2-п-д.validations.серия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-test2-сотрудники'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПДE', 'i-i-s-test2-п-д', {
    серия: attr('Серия', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    имя: attr('Имя', { index: 3 })
  });

  modelClass.defineProjection('ПДL', 'i-i-s-test2-п-д', {
    серия: attr('Серия', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    iD: attr('ID', { index: 2 }),
    имя: attr('Имя', { index: 3 })
  });
};
