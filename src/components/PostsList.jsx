import React, {memo} from "react";
import {Table} from "react-bootstrap";
import PostListItem from "./PostListItem";

const PostsList = ({data, deleteRecord, isLoggedIn}) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{width: "70%"}}>Title</th>
                        <th style={{width: "10%"}}></th>
                    </tr>
                </thead>
                <tbody>
                    <PostListItem
                        data={data}
                        deleteRecord={deleteRecord}
                        isLoggedIn={isLoggedIn}
                    />
                </tbody>
            </Table>
        </div>
    );
};

export default memo(PostsList);
