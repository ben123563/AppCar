const mongoose = require('mongoose');
import { CarSchema } from '../schema/schemaCar';
const CarModel = mongoose.model('CarModel', CarSchema);
export {CarModel}