import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

function HomeForm() {
  const [formData, handleFormData] = useState({
    domainName: "",
    type: ".arb",
    price: "0.0017 ETH",
  });

  const userInput = (e) => {
    handleFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="d-flex homeForm">
      <div>
        <label>Domain Name</label>
        <br />
        <input
          type="text"
          name="Domain Name"
          value={formData.domainName}
          onChange={userInput}
          className="formDomain"
        />
      </div>
      <div className="formTypeDiv">
        <label>Type</label>
        <br />
        <input
          type="text"
          name="Type"
          value={formData.type}
          onChange={userInput}
          className="formType"
        />
        <div className="formTypeRef">.arbi</div>
      </div>
      <div>
        <label>Price</label>
        <br />
        <input
          type="text"
          value={formData.price}
          onChange={userInput}
          name="price"
          className="formPrice"
        />
      </div>
      <button>
        <BiSearch />
      </button>
    </div>
  );
}

export default HomeForm;
