"use client"

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react"

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-10 sm:px-6">
      <Form
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-white/10 bg-[#161616] p-5 shadow-2xl sm:p-8"
        render={(props) => <form {...props} />}
      >
        {/* Heading */}
        <div className="mb-2 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Create your HireLoop account to get started
          </p>
        </div>

        {/* Full Name */}
        <TextField
          isRequired
          name="name"
          type="text"
          className="flex w-full flex-col gap-2"
          validate={(value) =>
            value.trim() ? null : "Please enter your full name"
          }
        >
          <Label className="text-sm font-medium text-white">Full Name</Label>
          <Input
            placeholder="John Doe"
            className="w-full rounded-lg border border-white/15 bg-[#242424] px-3 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#5b4dfb]"
          />
          <FieldError className="text-sm text-red-400" />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          className="flex w-full flex-col gap-2"
          validate={(value) =>
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ? null
              : "Please enter a valid email address"
          }
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
          name="password"
          type="password"
          minLength={8}
          className="flex w-full flex-col gap-2"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters"
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain one uppercase letter"
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain one number"
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
            At least 8 characters, 1 uppercase letter and 1 number.
          </Description>
          <FieldError className="text-sm text-red-400" />
        </TextField>

        {/* Create Account Button */}
        <Button
          type="submit"
          className="w-full rounded-lg bg-[#5b4dfb] px-4 py-3 font-medium text-white transition-colors hover:bg-[#4a3de8]"
        >
          Create Account
        </Button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-medium text-[#5b4dfb] hover:underline"
          >
            Sign In
          </a>
        </p>
      </Form>
    </main>
  )
}

export default SignUpPage
