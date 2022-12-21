import mongoose from 'mongoose';
import OutputStandard from './OutputStandard';

const SyllabusSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 50,
  },
  code: {
    type: String,
    min: 1,
    max: 10,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
  createdBy: {
    type: String,
    min: 2,
    max: 20,
  },
  duration: Number,
  outputStandar: [OutputStandard],
});
