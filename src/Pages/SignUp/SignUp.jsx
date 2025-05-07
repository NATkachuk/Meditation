import "./SignUp.scss"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
function SignUp() {
  const schema = yup
  .object({
    firstName: yup.string().min(4).max(8).required(),
    LastName: yup.string().max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <main className="main">
        <h1 className="title">Sign Up</h1>
        <form  className="sign-up" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First Name" {...register("firstName")} className="sign-up__input" />
            <p>{errors.firstName?.message}</p>
            <input type="text" placeholder="Last Name" {...register("LastName")} className="sign-up__input" />
            <p>{errors.LastName?.message}</p>
            <input type="email" placeholder="Email" {...register("email")} className="sign-up__input" />
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} className="sign-up__input" />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} className="sign-up__input" />
            <p>{errors.confirmPassword?.message}</p>
            <button type="submit" className="sign-up__btn">Sign Up</button>
        </form>
    </main>
  )
}

export default SignUp