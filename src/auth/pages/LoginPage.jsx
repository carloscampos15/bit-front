import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { InputError } from "../../ui/components/InputError";
import { AuthLayout } from "../layout/AuthLayout";
import { startLogin } from './../../store/auth/thunks';

export const LoginPage = () => {
  const { status, error } = useSelector(state => state.auth)

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (formData) => {
    dispatch(startLogin(formData))
  }

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <input type="email" placeholder="Correo electrónico"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email", {
              required: "Correo electrónico requerido",
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "Correo invalido"
              }
            })}
          />
          <InputError param={errors.email} />
          <InputError display="d-block" param={error} />
        </div>
        <div className="form-group mb-4">
          <input type="password" placeholder="Contraseña"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register("password", { required: "Contraseña requerida" })}
          />
          <InputError param={errors.password} />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-sm text-uppercase fw-bold"
            disabled={isAuthenticating}
          >
            INICIAR
          </button>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm text-uppercase fw-bold"
          >
            ¿OLVIDASTE TU CONTRASEÑA?
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}