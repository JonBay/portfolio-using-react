import Footer from '../components/Footer';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData({
      ...formData,  //I learned about this online and decided to try it.  It is called the spread syntax.  
      [name]: value,
    });
  
    if (name === 'email') {
      setErrors({
        ...errors,
        email: validateEmail(value) ? '' : 'Invalid email address',
      });
    } else if (name === 'name' || name === 'message') {
      setErrors({
        ...errors,
        [name]: value.trim() === '' || value === '' ? 'This field is required' : '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const nameError = name.trim() === '' ? 'This field is required' : '';
    const emailError = validateEmail(email) ? '' : 'Invalid email address';
    const messageError = message.trim() === '' ? 'This field is required' : '';

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    if (!(nameError || emailError || messageError)) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4" style={{ backgroundColor: '#E2BD9B', maxHeight: '500px' }}>
        <h1>Contact</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm- col-form-label">
              Name:
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm- col-form-label">
              Email:
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="message" className="col-sm- col-form-label">
              Message:
            </label>
            <div className="col-sm-9">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
          </div>

          <div className="mb-3 row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>

      </div>
      <Footer />
    </div>
  );
}
