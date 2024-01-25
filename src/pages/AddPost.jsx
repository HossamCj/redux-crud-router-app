import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {insertPost} from "../state/postSlice";
import {Form, Button} from "react-bootstrap";

import {useFormik} from "formik";
import {postSchema} from "../utils/validationSchema";

import Loading from "../components/Loading";
import withGuard from "../utils/withGuard";

const AddPost = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {loading, error} = useSelector((state) => state.posts);

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        validationSchema: postSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            // console.log(values);
            const id = Math.floor(Math.random() * 500);
            dispatch(
                insertPost({
                    id,
                    title: values.title,
                    description: values.description,
                })
            )
                .unwrap()
                .then(() => {
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    isInvalid={formik.errors.title}
                />
                {/* Start - Styling the input validations */}
                <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                </Form.Control.Feedback>
                {/* End - Styling the input validations */}
            </Form.Group>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    isInvalid={!!formik.errors.description}
                />
                {/* Start - Styling the input validations */}
                <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
                </Form.Control.Feedback>
                {/* End - Styling the input validations */}
            </Form.Group>

            <Loading loading={loading} error={error}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Loading>
        </Form>
    );
};

export default withGuard(AddPost);
