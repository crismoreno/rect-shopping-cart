import React from "react";

const RemoveFromCartButton = ({ handleRemove, id }) => {
  const removeClick = () => {
    handleRemove(id);
  };

  return (
    <div className="col col-6 col-lg-8">
      <button type="btn" className="btn btn-dark" onClick={removeClick}>
        Remove
      </button>
    </div>
  );
};

export { RemoveFromCartButton };
