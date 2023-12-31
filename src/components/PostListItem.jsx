import {Button, ButtonGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const PostListItem = ({data, deleteRecord, isLoggedIn}) => {
    const navigate = useNavigate();

    const deleteHandler = (item) => {
        if (window.confirm(`Do you really want to DELETE: ${item.title}`)) {
            deleteRecord(item.id);
        }
    };

    const records = data.map((element, index) => (
        <tr key={index}>
            <td>{++index}</td>
            <td>
                <Link to={`posts/${element.id}/details`}>{element.title}</Link>
            </td>
            <td>
                <ButtonGroup aria-label="Basic example">
                    <Button
                        variant="success"
                        onClick={() => navigate(`posts/${element.id}/edit`)}>
                        Edit
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => deleteHandler(element)}
                        disabled={!isLoggedIn}>
                        Delete
                    </Button>
                </ButtonGroup>
            </td>
        </tr>
    ));

    return <>{records}</>;
};

export default PostListItem;
