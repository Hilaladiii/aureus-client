import { Controller, useForm } from "react-hook-form";
import FormLayout from "./form-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterForm, registerSchema } from "../schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Props {
  onSubmit: (payload: RegisterForm) => void;
}

export default function FormRegister({ onSubmit }: Props) {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "BIDDER",
    },
  });
  return (
    <FormLayout
      title="CREATE ACCOUNT"
      description="JOIN THE LEDGER FOR EXCLUSIVE ARCHIVAL ACCESS"
      footerHref="/sign-in"
      footerText="ALREADY HAVE AN ACCOUNT? "
      footerNav="SIGN IN"
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>USERNAME</FieldLabel>
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
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>ACCOUNT ROLE</FieldLabel>
              <RadioGroup
                className="flex gap-5"
                onValueChange={field.onChange}
                value={field.value}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="BIDDER" id="BIDDER" />
                  <Label htmlFor="BIDDER" className="text-xs">
                    BIDDER
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="SELLER" id="SELLER" />
                  <Label htmlFor="SELLER" className="text-xs">
                    SELLER
                  </Label>
                </div>
              </RadioGroup>
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
          CREATE ACCOUNT
        </Button>
      </form>
    </FormLayout>
  );
}
