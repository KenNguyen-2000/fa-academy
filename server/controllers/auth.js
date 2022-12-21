import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Otp from '../models/Otp.js';

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: 'Email is already existed' });
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      ...req.body,
      email: req.body.email.trim(),
      password: hashedPassword,
    });
    await newUser.save();
    const accessToken = jwt.sign(
      {
        userId: newUser._id,
      },
      'secret key',
      {
        expiresIn: '2h',
      }
    );

    res.status(201).json({
      success: true,
      message: 'Create user successfully!',
      data: {
        accessToken,
        fullName: newUser.fullName,
        email: newUser.email,
        dob: newUser.dob,
        gender: newUser.gender,
        role: newUser.role,
        status: newUser.status,
        authorities: newUser.authorities,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  const { email, password, name, phoneNumber, role } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Email is not existed' });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Password is not correct' });
    }

    const accessToken = jwt.sign({ userId: user._id }, 'secret key', {
      expiresIn: '2h',
    });

    res.status(200).json({
      status: 200,
      message: 'Login successfully!',
      data: { accessToken },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
};

const sendOTPResetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Email is not existed! Please contact admin!',
      });
    }

    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const newOtp = new Otp({ otp: otp });
    await newOtp.save();
    res.status(200).json({
      status: 200,
      message: 'Send email successfully!',
      data: {
        id: newOtp._id,
        otp: newOtp.otp,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
};
