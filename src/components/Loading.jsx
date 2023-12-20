import {cloneElement} from "react";

const Loading = ({loading, error, children}) => {
    const elementType =
        children && children.type && children.type.render
            ? children.type.render.displayName
            : null;

    const renderHandler = () => {
        if (elementType === "Button") {
            const cloneButton = cloneElement(
                children,
                {disabled: true},
                "Loading..."
            );
            return (
                <>
                    {loading ? (
                        cloneButton
                    ) : error ? (
                        <>
                            {children}
                            <p>
                                <br />
                                {error}
                            </p>
                        </>
                    ) : (
                        children
                    )}
                </>
            );
        }
        return (
            <>
                {loading ? (
                    <p>loading please wait...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    children
                )}
            </>
        );
    };

    return renderHandler();
};

export default Loading;
