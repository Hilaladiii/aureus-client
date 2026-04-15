import { Controller, useForm } from "react-hook-form";
import FormLayout from "./form-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInForm, signInSchema } from "../schema";
import { Field, FieldError, FieldLabel } from "@/common/components/ui/field";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";

interface Props {
  onSubmit: (payload: SignInForm) => void;
  isLoading: boolean;
}

export default function FormSignIn({ onSubmit, isLoading }: Props) {
  const form = useForm<SignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <FormLayout
      title="LOGIN"
      description="ACCESS YOUR COLLECTION PROFILE"
      footerHref="/register"
      footerText="DONT HAVE AN ACCOUNT? "
      footerNav="REGISTER"
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>EMAIL</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="jhondoe@gmail.com"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>PASSWORD</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Type your password here"
                type="password"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button className="w-full font-mono mt-10" size="lg">
          {isLoading ? "LOADING..." : "AUTHENTICATE ACCOUNT"}
        </Button>
      </form>
    </FormLayout>
  );
}
