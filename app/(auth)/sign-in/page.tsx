"use client"

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react"

const SignInPage = () => {
  const handeOnSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const user = Object.fromEntries(formData.entries()) as {
        email: string
        password: string
      }

      const { data, error } = await authClient.signIn.email({
       ...user,
        rememberMe: true, 
        callbackURL: "/"
      })
  }
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-10 sm:px-6">
      <Form
      onSubmit={handeOnSubmit}
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-[#161616] p-5 shadow-2xl sm:p-8"
        render={(props) => <form {...props} />}
      >
        {/* Heading */}
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Sign in to your HireLoop account
          </p>
        </div>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          className="flex w-full flex-col gap-2"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address"
            }
            return null
          }}
        >
          <Label className="text-sm font-medium text-white">Email</Label>

          <Input
            placeholder="john@example.com"
            className="w-full rounded-lg border border-white/15 bg-[#242424] px-3 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#5b4dfb]"
          />

          <FieldError className="text-sm text-red-400" />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          className="flex w-full flex-col gap-2"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters"
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter"
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number"
            }
            return null
          }}
        >
          <Label className="text-sm font-medium text-white">Password</Label>

          <Input
            placeholder="Enter your password"
            className="w-full rounded-lg border border-white/15 bg-[#242424] px-3 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#5b4dfb]"
          />

          <Description className="text-xs text-neutral-400">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError className="text-sm text-red-400" />
        </TextField>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <a
            href="/forgot-password"
            className="text-sm text-neutral-400 transition-colors hover:text-[#5b4dfb]"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          className="w-full rounded-lg bg-[#5b4dfb] px-4 py-3 font-medium text-white transition-colors hover:bg-[#4a3de8]"
        >
          Sign In
        </Button>

        {/* Sign Up */}
        <p className="text-center text-sm text-neutral-400">
            Don&apos;t have an account?{" "}
          <a
            href="/sign-up"
            className="font-medium text-[#5b4dfb] hover:underline"
          >
            Sign Up
          </a>
        </p>
      </Form>
    </main>
  )
}

export default SignInPage
