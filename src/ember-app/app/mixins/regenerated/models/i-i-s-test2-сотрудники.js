import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  имя: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-test2-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-test2-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-test2-сотрудники', {
    iD: attr('ID', { index: 0 }),
    имя: attr('Имя', { index: 1 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-test2-сотрудники', {
    iD: attr('ID', { index: 0 }),
    имя: attr('Имя', { index: 1 })
  });
};
