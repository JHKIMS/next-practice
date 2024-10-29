import { Metadata } from "next";

export const metadata :Metadata = {
    title: "404 NOT FOUND"
}

const NotFound = () => {
    return (
        <div>
            404 NOT FOUND
        </div>
    );
}

export default NotFound;