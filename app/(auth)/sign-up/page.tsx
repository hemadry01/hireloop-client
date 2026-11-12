"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"

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
  const router = useRouter()

  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitError, setSubmitError] = React.useState("")

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)
    setSubmitError("")

    const formData = new FormData(e.currentTarget)

    const user = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      role: String(formData.get("role") ?? "seeker"),
      password: String(formData.get("password") ?? ""),
    }

    try {
      const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL: "/",
      })

      if (error) {
        setSubmitError(
          error.message ?? "Something went wrong. Please try again."
        )
        return
      }

      if (data) {
        router.replace("/")
        console.log("User Login Successful",data)
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-10 sm:px-6">
      <Form
        onSubmit={handleOnSubmit}
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

        {/* Role */}
        <div className="flex w-full flex-col gap-2">
          <Label className="text-sm font-medium text-white">Select Role</Label>

          <select
            name="role"
            defaultValue="seeker"
            required
            className="w-full rounded-lg border border-white/15 bg-[#242424] px-3 py-3 text-sm text-white outline-none focus:border-[#5b4dfb]"
          >
            <option value="seeker">Seeker</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Password */}
        <TextField
          isRequired
          name="password"
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

          <div className="relative w-full">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-white/15 bg-[#242424] px-3 py-3 pr-16 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#5b4dfb]"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-sm font-medium text-[#5b4dfb] hover:text-white"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Description className="text-xs text-neutral-400">
            At least 8 characters, 1 uppercase letter and 1 number.
          </Description>

          <FieldError className="text-sm text-red-400" />
        </TextField>

        {/* Submit Error */}
        {submitError && (
          <p className="text-sm text-red-400" role="alert">
            {submitError}
          </p>
        )}

        {/* Create Account Button */}
        <Button
          type="submit"
          isDisabled={isLoading}
          className="w-full rounded-lg bg-[#5b4dfb] px-4 py-3 font-medium text-white transition-colors hover:bg-[#4a3de8]"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
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
