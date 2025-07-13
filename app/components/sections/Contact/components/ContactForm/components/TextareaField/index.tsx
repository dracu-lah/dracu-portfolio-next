import { useFormContext } from "react-hook-form";

interface TextareaFieldProps {
  name: keyof import("@/lib/validation/contact-schema").ContactFormData;
  placeholder?: string;
  rows?: number;
}

const TextareaField = ({
  name,
  placeholder,
  rows = 10,
}: TextareaFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register(name)}
        className="p-2 w-full rounded-lg outline-none border-2 focus:border-secondary duration-300 bg-transparent"
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default TextareaField;
