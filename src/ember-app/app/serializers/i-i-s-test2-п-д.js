import { Serializer as ПДSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test2-п-д';
import СотрудникиSerializer from './i-i-s-test2-сотрудники';

export default СотрудникиSerializer.extend(ПДSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
