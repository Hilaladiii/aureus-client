import Header from "../fragments/header";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
