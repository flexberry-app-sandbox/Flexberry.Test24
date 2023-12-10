import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test2',
          title: 'Test2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test2-п-д-l': IISTest2ПДLForm,
    'i-i-s-test2-сотрудники-l': IISTest2СотрудникиLForm,
    'i-i-s-test2-п-д-e': IISTest2ПДEForm,
    'i-i-s-test2-сотрудники-e': IISTest2СотрудникиEForm
  },

});

export default translations;
