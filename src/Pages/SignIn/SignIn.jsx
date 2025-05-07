import "./SignIn.scss"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function SignIn() {
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
        <h1 className="title">Sign In</h1>
        <form  className="sign-in" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Email" {...register("email")} className="sign-in__input" />
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} className="sign-in__input" />
            <p>{errors.password?.message}</p>
            <button type="submit" className="sign-in__btn">Sign In</button>
        </form>
    </main>
  )
}

export default SignIn