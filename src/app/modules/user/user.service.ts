import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: '1007',
        role: 'student',
        password: '9587452524',
        email: 'farjana@gmail.com',
        name: {
            firstName: 'Ferjana',
            middleName: 'Akter',
            lastName: 'Faju',
        },
        dateOfBirth: '25-12-1998',
        phoneNumber: '01601565956',
        emmercencyNo: '0175685452',
        gender: 'female',
        presenAddress: 'Dhaka',
        permanentAddress: 'Dhaka'
      });

    await user.save();
    return user;
}