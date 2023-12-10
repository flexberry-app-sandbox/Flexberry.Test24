import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test2.caption'),
          title: i18n.t('forms.application.sitemap.test2.title'),
          children: [{
            link: 'i-i-s-test2-п-д-l',
            caption: i18n.t('forms.application.sitemap.test2.i-i-s-test2-п-д-l.caption'),
            title: i18n.t('forms.application.sitemap.test2.i-i-s-test2-п-д-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-test2-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.test2.i-i-s-test2-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.test2.i-i-s-test2-сотрудники-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})