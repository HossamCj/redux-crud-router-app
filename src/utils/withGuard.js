import {useSelector} from "react-redux";

const withGuard = (Component) => {
    const Wrapper = (props) => {
        const {isLoggedIn} = useSelector((state) => state.auth);

        return isLoggedIn ? (
            <Component {...props} age="30" />
        ) : (
            <div>Please Login to Add new post!</div>
        );
    };

    return Wrapper;
};

export default withGuard;
