export interface IUser {
    id: string;
    role: 'student';
    password: string;
    email: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string
    };
    dateOfBirth?: string;
    phoneNumber: string;
    emmercencyNo: string;
    gender: 'male' | 'female';
    presenAddress: string;
    permanentAddress: string
  }