import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test2-п-д-l');
  this.route('i-i-s-test2-п-д-e',
  { path: 'i-i-s-test2-п-д-e/:id' });
  this.route('i-i-s-test2-п-д-e.new',
  { path: 'i-i-s-test2-п-д-e/new' });
  this.route('i-i-s-test2-сотрудники-l');
  this.route('i-i-s-test2-сотрудники-e',
  { path: 'i-i-s-test2-сотрудники-e/:id' });
  this.route('i-i-s-test2-сотрудники-e.new',
  { path: 'i-i-s-test2-сотрудники-e/new' });
});

export default Router;
