import React from "react";

const SearchButton = (props) => {
    return (
        <div className="input-group-append" >
             <button className="btn btn-outline-secondary w-100" onClick={props.updateDate} type="button">Search</button>
        </div>
     );
}

export default SearchButton;
