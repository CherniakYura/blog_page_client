import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ id, title, text, date, author, comments }) => {
    const [dateFormat, setDate] = useState(new Date(date));
    function getPrettyDate(d) {
        return (
            d.getDate() +
            "." +
            (d.getMonth() + 1) +
            "." +
            d.getFullYear() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes()
        );
    }
    return (
        <div className="card">
            <div className="card-title">{title} </div>
            <div className="card-text">{text.slice(0, 25)}... </div>

            <div className="card-date">
                <i> {getPrettyDate(dateFormat)}</i>{" "}
            </div>
            <div className="card-bottom">
                <Link to={`/${id}`}>
                    <button>View post</button>
                </Link>
                <span
                    className={`card-comments ${
                        comments.length ? "" : "opacity-60"
                    }`}
                >
                    <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="20px"
                        height="20px"
                    >
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
                    </svg>
                    {comments.length}
                    <span className="comments-count"> </span>
                </span>
            </div>
        </div>
    );
};

export default Post;
