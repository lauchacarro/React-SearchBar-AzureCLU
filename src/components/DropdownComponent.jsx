import React from "react";

const DropdownComponent = ({ itemsList }) => {
  return (
    <div className="dropdown-content">
      {itemsList.map((item, i) => (
        <div className="drop-item" key={i}>
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
