import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
	// email rules
	email: Yup.string()
		.email("Please include a valid email address")
		.required("Required"),

	// password rules
	password: Yup.string()
		.min(8, "8+ characters required")
		.required("Required"),
});
