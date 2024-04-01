import { useRef } from "react";
import { LinkSimple } from "@phosphor-icons/react";
import Wrapper from "./FormWrapper.jsx";

import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/util/firebase.js";

import { AddFormSchema } from "./AddForm.schema.js";
import { useFormik } from "formik";

async function AddLink(email, title, url) {
  try {
    if (!email) return;

    const docRef = await addDoc(collection(firestore, email), {
      title,
      url,
      date: new Date().toJSON(),
    });

    return [docRef.id, null];
  } catch (e) {
    return [null, e];
  }
}

export default function (props) {
  const { open, setOpen, email } = props;
  const cancelButtonRef = useRef(null);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      url: "",
    },
    validationSchema: AddFormSchema,
    onSubmit: async function (values, actions) {
      let { title, url } = values;

      console.log(title, url);

      let [id, error] = await AddLink(email, title, url);
      if (!error) {
        actions.resetForm();
        setOpen(false);
      }
    },
  });

  return (
    <Wrapper open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <LinkSimple className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add a new link
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {touched.title && errors.title && (
                <p className="text-xs text-red-600 mt-2" id="title-error">
                  {errors.title}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL
              </label>
              <div className="mt-2">
                <input
                  id="url"
                  name="url"
                  type="text"
                  autoComplete="url"
                  value={values.url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {touched.url && errors.url && (
                <p className="text-xs text-red-600 mt-2" id="url-error">
                  {errors.url}
                </p>
              )}
            </div>

            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
              >
                Add
              </button>
              <button
                type="reset"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                onClick={() => setOpen(false)}
                ref={cancelButtonRef}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
