import ArrowButton from "../ArrowButton";
import * as yup from "yup";
import { Container, ForgetPassword, Title } from "./style";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface SigninData {
  email: string;
  password: string;
  error: boolean;
}

const FormSignin = () => {
  // const handleClick = () => Router.push("/newbet");
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("*Obrigatório")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required("*Obrigatório")
      .min(4, "Mínimo 4 caracteres"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: SigninData) => {
    reset();
    console.log(data);
  };
  return (
    <Container>
      <Title>Authentication</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Email" {...register("email")} />
          <span> {errors.email?.message}</span>
        </div>

        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            autoComplete="on"
          />
          <span> {errors.password?.message}</span>
        </div>

        <ForgetPassword>I forget my password</ForgetPassword>
        <ArrowButton greenFluorescent>Log In</ArrowButton>
      </form>
    </Container>
  );
};

export default FormSignin;
