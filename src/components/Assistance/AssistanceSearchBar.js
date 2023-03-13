import React from "react";
import { BsSearch } from "react-icons/bs";

const AssistanceSearchBar = (props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    props.onSearchChange(e);
  };

  return (
    <form className=" relative">
      <BsSearch color="red" className="absolute" size={40} />
      <input
        className="searchbar"
        type="text"
        placeholder="Describe your issue"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default AssistanceSearchBar;
