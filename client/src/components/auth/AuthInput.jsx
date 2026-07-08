import { forwardRef } from "react";

const AuthInput = forwardRef(
  ({ label, type = "text", placeholder, ...props }, ref) => {
    return (
      <div className="mb-6">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          {label}
        </label>

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-violet-500
            focus:ring-2
            focus:ring-violet-500/20
          "
          {...props}
        />

      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;