import React from "react";

export const version_json = {
    'version' : '8.15' 
}

const VersionPage = () => {
    return (
        <p>
            {JSON.stringify(version_json)}
        </p>
    )
}

export default VersionPage;
