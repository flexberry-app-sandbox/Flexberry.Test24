import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest2ПДLForm from './forms/i-i-s-test2-п-д-l';
import IISTest2СотрудникиLForm from './forms/i-i-s-test2-сотрудники-l';
import IISTest2ПДEForm from './forms/i-i-s-test2-п-д-e';
import IISTest2СотрудникиEForm from './forms/i-i-s-test2-сотрудники-e';
import IISTest2ПДModel from './models/i-i-s-test2-п-д';
import IISTest2СотрудникиModel from './models/i-i-s-test2-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test2-п-д': IISTest2ПДModel,
    'i-i-s-test2-сотрудники': IISTest2СотрудникиModel
  },

  'application-name': 'Test2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test2',
          title: 'Test2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test2: {
          caption: 'Test2',
          title: 'Test2',
          'i-i-s-test2-п-д-l': {
            caption: 'ПД',
            title: ''
          },
          'i-i-s-test2-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test2-п-д-l': IISTest2ПДLForm,
    'i-i-s-test2-сотрудники-l': IISTest2СотрудникиLForm,
    'i-i-s-test2-п-д-e': IISTest2ПДEForm,
    'i-i-s-test2-сотрудники-e': IISTest2СотрудникиEForm
  },

});

export default translations;
