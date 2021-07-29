import ArrowButton from "../ArrowButton";
import { Container, Title } from "../FormSignin/style";
import Router from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const FormSignup = () => {
  // const handleClick = () => Router.push("/newbet");

  const formSchema = yup.object().shape({
    name: yup.string().required("*Obrigatório"),
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

  interface SignupData {
    email: string;
    password: string;
    name: string;
    error: boolean;
  }
  const onSubmit = (data: SignupData) => {
    reset();
    api
      .post("/users", data)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
    console.log(data);
  };
  return (
    <Container>
      <Title>Registration</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Name" {...register("name")} />
          <span> {errors.name?.message}</span>
        </div>
        <div>
          <input type="email" placeholder="Email" {...register("email")} />
          <span> {errors.email?.message}</span>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            autoComplete="on"
            {...register("password")}
          />
          <span> {errors.password?.message}</span>
        </div>

        <ArrowButton greenFluorescent>Register</ArrowButton>
      </form>
    </Container>
  );
};

export default FormSignup;
