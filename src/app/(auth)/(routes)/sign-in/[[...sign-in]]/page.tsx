import AuthText from "@/components/Shared/AuthText";
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="flex justify-between items-center h-screen overflow-y-hidden">
    <AuthText />
    <SignIn />
  </div>
  );
}