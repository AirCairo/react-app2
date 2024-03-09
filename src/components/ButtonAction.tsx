import React, { useState } from "react";

interface ListGroupProps {
  children: string;
  color?: string;
  onButtonClick: () => void;
}

const ButtonAction = ({
  children,
  onButtonClick,
  color = "success",
}: ListGroupProps) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={onButtonClick}
        color={color}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonAction;
