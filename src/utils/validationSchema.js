import * as Yup from "yup";

export const postSchema = Yup.object().shape({
    title: Yup.string()
        .min(4, "Too Short!, Please insert at least 4 characters.")
        .max(50, "Too Long!, Please insert 50 characters max.")
        .required("Title is required!"),
    description: Yup.string().required("Description is required!"),
});
