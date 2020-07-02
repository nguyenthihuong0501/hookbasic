import React, { useState } from "react";
import PropTypes from "prop-types";
//import React, { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState(" ");

  //nhap gia tri nhap vao input
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  //luu lai gia tri dk nhap vao
  function handleSubmit(e) {
    e.preventDefault();

    if (!onSubmit) return; // neu onSubmit ko co thi ko lam gi ca

    const formValua = {
      title: value,
    };
    onSubmit(formValua);
    //sau khi submit xong phai reset form
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleValueChange}></input>
    </form>
  );
}

export default TodoForm;
