import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { baseURL } from "../utils/constant";

const List = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <li>
      {task}
      <div className="icons">
        <BiEditAlt className="icon-edit" onClick={() => updateMode(id, task)} />
        <BsTrash className="icon-basquet" onClick={removeTask} />
      </div>
    </li>
  );
};

export default List;