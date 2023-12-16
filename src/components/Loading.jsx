import React from "react";

const Loading = ({loading, error, children}) => {
    return (
        <>
            {" "}
            {loading ? (
                <p colSpan={3}>Loading the records, please wait...</p>
            ) : error ? (
                <p colspan={3}>{error}</p>
            ) : (
                children
            )}
        </>
    );
};

export default Loading;
