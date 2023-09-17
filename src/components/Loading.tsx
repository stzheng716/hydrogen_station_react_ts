import loader from "../assets/gif/loader.gif";

function Loading() {
    return (
        <div className="flex justify-center bg-grey">
            <img src={loader} alt="loading spinner"/>
        </div>
    )
}

export default Loading