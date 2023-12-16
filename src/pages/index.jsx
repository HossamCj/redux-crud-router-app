import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchPosts} from "../state/postSlice";
import PostsList from "../components/PostsList";
import Loading from "../components/Loading";

const Index = () => {
    const dispatch = useDispatch();
    const {records, loading, error} = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <Fragment>
            <Loading loading={loading} error={error}>
                <PostsList data={records} />
            </Loading>
        </Fragment>
    );
};

export default Index;
