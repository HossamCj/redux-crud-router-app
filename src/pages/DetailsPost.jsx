import {useEffect} from "react";
import {useDispatch} from "react-redux";

import {cleanRecord} from "../state/postSlice";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";

const DetailsPost = () => {
    const dispatch = useDispatch();
    const {loading, record, error} = usePostDetails();

    useEffect(() => {
        return () => {
            dispatch(cleanRecord());
        };
    }, [dispatch]);

    return (
        <Loading loading={loading} error={error}>
            <div>
                <h4>Title: {record?.title}</h4>
                <p>
                    <b>Discription</b>: {record?.description}
                </p>
            </div>
        </Loading>
    );
};

export default DetailsPost;
