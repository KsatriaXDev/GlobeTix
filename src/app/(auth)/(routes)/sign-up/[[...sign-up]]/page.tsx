import AuthText from "@/components/Shared/AuthText";
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
  <div className="flex justify-between items-center w-full h-full mt-10">
    <AuthText />
    <SignUp />
  </div>
  );
}