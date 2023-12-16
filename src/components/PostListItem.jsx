import React from "react";

import {Button, ButtonGroup} from "react-bootstrap";

const PostListItem = ({data}) => {
    const records = data.map((element, index) => (
        <tr key={index}>
            <td>{++index}</td>
            <td>{element.title}</td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    ));

    return <>{records}</>;
};

export default PostListItem;
