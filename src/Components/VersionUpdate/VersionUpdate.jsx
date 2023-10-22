import React from "react";

const version_json = {
    'version': '9.2'
}

const VersionPage = () => {
    return (
        <p>
            {JSON.stringify(version_json)}
        </p>
    )
}

export { version_json }
export default VersionPage;
