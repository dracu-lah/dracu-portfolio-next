export const projectValidation = {
  project_title: {
    required: "Project title is required",
    minLength: {
      value: 3,
      message: "Title must be at least 3 characters long",
    },
    maxLength: {
      value: 100,
      message: "Title must not exceed 100 characters",
    },
  },
  project_meta_description: {
    required: "Project description is required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters long",
    },
    maxLength: {
      value: 500,
      message: "Description must not exceed 500 characters",
    },
  },
  project_link: {
    required: "Project link is required",
    pattern: {
      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      message: "Please enter a valid URL",
    },
  },
  img_url: {
    required: "Image URL is required",
    pattern: {
      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      message: "Please enter a valid URL",
    },
  },
  project_skills: {
    required: "At least one skill is required",
    validate: {
      notEmpty: (value) => value.trim().length > 0 || "Skills cannot be empty",
      validFormat: (value) =>
        /^[a-zA-Z0-9\s,]+$/.test(value) ||
        "Skills can only contain letters, numbers, spaces, and commas",
    },
  },
};

export const loginValidation = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters",
    },
  },
};
