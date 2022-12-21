import mongoose from 'mongoose';

const OutputStandardSchema = new mongoose.Schema({
  name: String,
  code: String,
});

const OutputStandard = mongoose.model('OutputStandar', OutputStandardSchema);

export default OutputStandard;
