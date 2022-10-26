import { useState } from "react";
import "./header.css";
import { updateSearch } from "../redux/reducer";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
      updateSearch: (str) => dispatch(updateSearch(str)),
    };
  };
const Header =(props)=> {

    const [state,setState] = useState("");

console.log(state);

    return(
        <div  className="div-header">
            <h2 id="header-txt-left">Total Contacts</h2>
            <input type={"search"} id="input-box" placeholder="search contact by email" value={state} onChange={(event)=>{
                setState(event.target.value);
                props.updateSearch(event.target.value)
                }}/>
            <div id="user-details">
                <div id="prof-img"></div>
                <div id="user-info">
                <div id="username">Loreum Ipsum</div>
                <div id="role">user</div>
                </div>
               
            </div>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(Header);