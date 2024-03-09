//import React from "react";

import { ReactNode, useState } from "react";

interface ListGroupProps {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: ListGroupProps) => {
  const [alertHidden, toggleAlertVisiblility] = useState(false);
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
      hidden={alertHidden}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
