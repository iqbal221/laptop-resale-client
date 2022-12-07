import React from "react";

const DeleteButton = () => {
  return <div>Swal.fire({
    title: "Do you want to delete confirm?",
    showCancelButton: true,
    confirmButtonText: "Ok",
  }).then((result) => {
    
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });</div>;
};

export default DeleteButton;
