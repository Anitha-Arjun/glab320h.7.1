import React, { useState } from "react";

export default function Form(props) {
  const [formData, setFormData] = useState({ searchTerm: " " });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.movieSearch(formData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={formData.searchTerm}
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
