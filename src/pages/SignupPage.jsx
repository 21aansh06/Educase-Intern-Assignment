import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../styles/signupPage.css';
import "../styles/singupPage.css"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phoneNumber:'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    companyName: 'Marry Doe',
    isAgency: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      isAgency: e.target.value === 'yes',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Account created! Check the console for data.');
  };

  return (
    <div className="create-account-container">
      <div className="header-section">
        <h1 className="title">Create your <br/> PopX account</h1>
      </div>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber">Phone number*</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="companyName">Company name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        
        <div className="radio-group">
          <p className="radio-label">Are you an Agency?*</p>
          <div className="radio-option">
            <input
              type="radio"
              id="isAgencyYes"
              name="isAgency"
              value="yes"
              checked={formData.isAgency === true}
              onChange={handleRadioChange}
            />
            <label htmlFor="isAgencyYes">Yes</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              id="isAgencyNo"
              name="isAgency"
              value="no"
              checked={formData.isAgency === false}
              onChange={handleRadioChange}
            />
            <label htmlFor="isAgencyNo">No</label>
          </div>
        </div>

        <Link type="submit" to={"/profile"} className="btn submit-btn">
          Create Account
        </Link>
      </form>
    </div>
  );
};

export default SignupPage;
