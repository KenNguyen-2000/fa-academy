import User from '../models/User.js';

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id.trim());
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'Cannot find User',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Delete successfully!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const changeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id.trim(),
      { status: status },
      {
        new: true,
        runValidators: true,
      }
    );

    console.log(user);
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'Cannot find User',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Change status successfully',
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        dob: user.dob,
        gender: user.gender,
        role: user.role,
        status: user.status,
        authorities: user.authorities,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.errors.role.message) {
      return res.status(400).json({
        status: 400,
        message: 'Role is not supported!',
      });
    }
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const changeRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { role: role.trim() },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'Cannot find User',
      });
    }

    res.status(200).json({
      status: 200,
      message: 'Change role successfully',
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        dob: user.dob,
        gender: user.gender,
        role: user.role,
        status: user.status,
        authorities: user.authorities,
      },
    });
  } catch (error) {
    console.log(error);
    if (error.errors.role.message) {
      return res.status(400).json({
        status: 400,
        message:
          'Role must be Super Admin or Class Admin or Trainer or Trainee',
      });
    }
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
};
