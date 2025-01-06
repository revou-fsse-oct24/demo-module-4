import { useState } from "react";

const Input = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (event: any) => {
    console.log("event", event);
    const { name, value } = event.target;
    setFormData((prevData) => ({
      // ini proses mengcopy data sebelumnya
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    if (formData.name === "") {
      alert("please input your name");
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 special character"
      );
      return false;
    }

    if (formData.email === "") {
      alert("please input your email");
      return false;
    }

    return true;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (validate()) {
      alert(`hello ${formData.name} password kamu ini ya ${formData.password}`);
    }
  };

  return (
    <div>
      <h1>Form Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
