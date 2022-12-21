import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    minLength: 2,
    max: 20,
    required: true,
  },
  email: {
    type: String,
    max: 50,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  phoneNumber: {
    type: String,
    min: 9,
    max: 11,
  },
  dob: {
    type: Date,
    max: new Date(),
    default: new Date(),
  },
  gender: {
    type: String,
    enum: ['female', 'male', 'other'],
    default: 'other',
  },
  level: String,
  role: {
    type: String,
    enum: ['super_admin', 'class_admin', 'trainer', 'trainee'],
    default: 'super_admin',
  },
  status: {
    type: String,
    enum: ['on-boarding', 'active', 'inactive', 'in-class', 'off-class'],
    default: 'inactive',
  },
  authorities: {
    type: [
      {
        service: {
          type: String,
          enum: ['syllabus', 'class', 'training_program', 'user'],
          default: 'syllabus',
        },
        permission: {
          type: String,
          enum: ['create', 'update', 'view', 'no_access'],
          default: 'view',
        },
      },
    ],

    default: [
      { service: 'syllabus', permission: 'create' },
      { service: 'class', permission: 'create' },
      { service: 'training_program', permission: 'create' },
      { service: 'user', permission: 'create' },
    ],
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
