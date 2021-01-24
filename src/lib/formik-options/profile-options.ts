import * as Yup from "yup";
import { FormikHelpers } from "formik";
import updateUser from "@/requests/update-user";
import { mutate } from "swr";
import uploadImage from "@/utils/upload-image";

export const initialValues = {
  photo: "",
  name: "",
  bio: "",
  phone: "",
  email: ""
};

export type TValues = typeof initialValues;

export const validationSchema = Yup.object({
  photo: Yup.string().label("Photo"),
  name: Yup.string().min(3).label("Name"),
  bio: Yup.string().min(3).label("Bio"),
  phone: Yup.string().min(10).label("Phone Number"),
  email: Yup.string().email().required().label("Email")
});

export const handleSubmit = (
  imageFile: File | null,
  handleError: (error: string) => void,
  handleSuccess: (message: string) => void
) => async (
  values: TValues,
  { setFieldError, setSubmitting }: FormikHelpers<TValues>
) => {
  let photo: string;

  if (imageFile) {
    photo = await uploadImage(imageFile);
  }

  const res = await updateUser({ ...values, photo });
  const data = await res.json();

  if (res.ok) {
    mutate("/api/user", data);
    handleSuccess("Update Successful");
  } else {
    typeof data === "string"
      ? handleError(data)
      : setFieldError(data.key, data.message);
  }

  setSubmitting(false);
};
