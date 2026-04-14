"use client";

import { useForm } from "react-hook-form";
import FormCreateAuction from "./components/form-create";

export default function Page() {
  const form = useForm();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mt-25">
        <h1 className="font-mono text-5xl font-bold">
          NEW LISTING REGISTRATION
        </h1>
        <p className="text-left text-secondary40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
          obcaecati?
        </p>
        <FormCreateAuction form={form} onSubmit={() => {}} />
      </div>
    </div>
  );
}
