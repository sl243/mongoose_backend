import express, { Application} from 'express';
import cors from 'cors';
const app: Application = express()

// application user route
import userRoute from './app/modules/user/user.route';

// middle ware cors
app.use(cors());

app.use('/api/v1/user', userRoute)

// app.get('/', (req: Request, res: Response, next: NextFunction) => {

//     /* 
//         step1: create interface
//         step2: create schema
//         step3: create model
//         step4: database query

//     */

//     // creating an interface
//     // interface IUser {
//     //     id: string;
//     //     role: 'student';
//     //     password: string;
//     //     email: string;
//     //     name: {
//     //         firstName: string;
//     //         middleName?: string;
//     //         lastName: string
//     //     };
//     //     dateOfBirth?: string;
//     //     phoneNumber: string;
//     //     emmercencyNo: string;
//     //     gender: 'male' | 'female';
//     //     presenAddress: string;
//     //     permanentAddress: string
//     //   }

//     //   creating schema
//     // const userSchema = new Schema<IUser>({
//     //     id: {type: String, required: true, unique: true},
//     //     role: {type: String, required: true},
//     //     password: {type: String, required: true},
//     //     email: {type: String, required: true},
//     //     name: { 
//     //         firstName: {type: String, required: true},
//     //         middleName: {type: String},
//     //         lastName: {type: String, required: true}
//     //      },
//     //     dateOfBirth: { type: String},
//     //     phoneNumber: {type: String, required: true},
//     //     emmercencyNo: {type: String, required: true},
//     //     gender: {type: String, enum: ['male' , 'female']},
//     //     presenAddress: {type: String, required: true},
//     //     permanentAddress: {type: String, required: true}
//     //   });


//     // // 3. Create a Model.
//     // const User = model<IUser>('User', userSchema);

//     // const createUserToDB = async () => {
//     //     const user = new User({
//     //         id: '1004',
//     //         role: 'student',
//     //         password: '9587452',
//     //         email: 'kaoshik@gmail.com',
//     //         name: {
//     //             firstName: 'Minar',
//     //             middleName: 'hossain',
//     //             lastName: 'Koushik',
//     //         },
//     //         dateOfBirth: '25-12-1998',
//     //         phoneNumber: '01601565956',
//     //         emmercencyNo: '0175685452',
//     //         gender: 'male',
//     //         presenAddress: 'Sylhet',
//     //         permanentAddress: 'Dhaka'
//     //       });
//     //       await user.save();
//     // }

//     createUserToDB();

//     res.send('Hello World!')
//     next();
// })

export default app;