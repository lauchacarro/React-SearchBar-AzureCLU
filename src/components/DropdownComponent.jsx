import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownComponent = ({ itemsList }) => {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(item.url);
  };

  return (
    <div className="dropdown-content">
      {itemsList.map((item) => (
        <div
          className="drop-item"
          key={item.name}
          onClick={(e) => handleClick(item)}
        >
          <div className="icon">
            <item.icon size={25} />
          </div>
          <span>{item.page}</span>
        </div>
      ))}
    </div>
  );
};

export default DropdownComponent;
