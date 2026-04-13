"use client";

import FormSignIn from "./components/form-sign-in";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <FormSignIn onSubmit={() => {}} />
    </div>
  );
}
