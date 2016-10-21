import rethinkdbdash from 'rethinkdbdash';
import config from '../../config/db';
import objectAssign from 'object-assign';

export const r = rethinkdbdash(config);

var config_internal = objectAssign({}, config);
config_internal.db = config.db + '_internal';
export const r_internal = rethinkdbdash(config_internal);
