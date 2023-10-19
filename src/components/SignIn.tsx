import { FC } from "react";
import { Icons } from "./Icons";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
import Logo from "./Logo";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  return (
    <div className=" container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="file flex-col space-y-2 text-center ">
        <div className=" flex justify-center ">
          <Logo />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className=" text-sm max-w-xs">
          By continuing, you are setting up a SociVibe account and agree to our
          User Agreement and Privacy Policy.
        </p>
        {/* sign in form */}
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-zinc-700">
          New to SociVibe?
          <Link
            href="sign-up"
            className="hover:text-zinc-800 underline underline-offset-4"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
