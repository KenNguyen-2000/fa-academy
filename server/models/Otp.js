import mongoose from 'mongoose';

const OtpSchema = new mongoose.Schema({
  number: {
    type: String,
    min: 4,
    max: 6,
  },
});

const Otp = mongoose.model('Otp', OtpSchema);

export default Otp;
