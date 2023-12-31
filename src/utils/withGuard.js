import {useSelector} from "react-redux";

const withGuard = (Component) => {
    const Wrapper = (props) => {
        const {isLoggedIn} = useSelector((state) => state.auth);

        return isLoggedIn ? (
            <Component {...props} />
        ) : (
            <div>Please Login to Add new post!</div>
        );
    };

    return Wrapper;
};

export default withGuard;
