import Footer from "../fragments/footer";
import Header from "../fragments/header";
import { Toaster } from "../ui/sonner";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster />
    </>
  );
}
