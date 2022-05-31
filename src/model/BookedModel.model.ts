const mongoose = require('mongoose');
import { BookedSchema } from '../schema/schemaBooked';
const BookedModel = mongoose.model('BookedModel', BookedSchema);
export {BookedModel}