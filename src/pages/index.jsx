import React, {Fragment, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {deletePost, fetchPosts} from "../state/postSlice";
import PostsList from "../components/PostsList";
import Loading from "../components/Loading";

const Index = () => {
    const dispatch = useDispatch();
    const {records, loading, error} = useSelector((state) => state.posts);
    const {isLoggedIn} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const deleteRecord = useCallback(
        (id) => {
            dispatch(deletePost(id));
        },
        [dispatch]
    );

    return (
        <Fragment>
            <Loading loading={loading} error={error}>
                <PostsList
                    data={records}
                    deleteRecord={deleteRecord}
                    isLoggedIn={isLoggedIn}
                />
            </Loading>
        </Fragment>
    );
};

export default Index;
