import * as Yup from "yup";

export const AddFormSchema = Yup.object().shape({
	// title rules
	title: Yup.string()
		.required("Required"),

	// url rules
	url: Yup.string()
		.url("Invalid URL")
		.required("Required"),
});
