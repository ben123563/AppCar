const mongoose = require('mongoose');
import { UserSchema } from '../schema/schemaUser';
const UserModel = mongoose.model('UserModel', UserSchema);
export {UserModel}