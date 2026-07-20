import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import Button from "../components/ui/Button";

import { signupSchema } from "../schemas/authSchemas";
import { registerUser } from "../services/auth";
import { useAuth } from "../hooks/useAuth";

function Signup() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await registerUser({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start your AI-powered coding journey today."
    >
      <AuthCard>
        <form onSubmit={handleSubmit(onSubmit)}>

          <AuthInput
            label="Full Name"
            placeholder="John Doe"
            {...register("fullName")}
          />

          {errors.fullName && (
            <p className="mb-4 text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}

          <AuthInput
            label="Email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mb-4 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}

          <AuthInput
            label="Password"
            type="password"
            placeholder="********"
            {...register("password")}
          />

          {errors.password && (
            <p className="mb-4 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}

          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="********"
            {...register("confirmPassword")}
          />

          {errors.confirmPassword && (
            <p className="mb-6 text-sm text-red-400">
              {errors.confirmPassword.message}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-blue-600"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

        </form>

        <div className="mt-8 text-center">

          <span className="text-slate-400">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 font-semibold text-violet-400"
          >
            Login
          </Link>

        </div>
      </AuthCard>
    </AuthLayout>
  );
}

export default Signup;