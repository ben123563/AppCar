const mongoose = require('mongoose');
import { availableTimesSchema } from '../schema/schemaAvailableTimes';
const AvailableTimesModel = mongoose.model('AvailableTimes', availableTimesSchema);
export {AvailableTimesModel}