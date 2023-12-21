import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";

const DetailsPost = () => {
    const {loading, record, error} = usePostDetails();
    console.log(record);

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
