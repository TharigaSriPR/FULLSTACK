import '/src/assets/css/Register.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};


    if (!username.trim()) {
      errors.username = 'Username is required';
    }

 
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email address';
    }


    if (!password.trim()) {
      errors.password = 'Password is required';
    }


    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }


    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (!validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

   
    setFormErrors(errors);


    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully!');
     
    } else {
      console.log('Form has errors, cannot submit!');
    }
  };

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent: 'center', minHeight: '100lvh', minWidth: '100lvw' }}>
      {/* Add your video background and grid elements here */}

      
        <div className="container">
          <div className="row align-items-center">
            <div className="card">
            
                
                  
        
              
              <div>
                <div className="loginform">
                  
                    <div className="header">
                      <div className="notice">
                        <div>
                        <h1>Welcome to our website!</h1>
                            <br/>
                          <h2>Sign Up</h2>
                        </div>
                        <div>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <form  onSubmit={handleSubmit}>
                      <div className="form-group ml-3 mr-1">
                        <TextField
                          required
                          id="outlined-required"
                          label="Username"
                          type="text"
                          style={{ width: '80%' }}
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          error={!!formErrors.username}
                          helperText={formErrors.username}
                        />
                      </div>
                      <div className="form-group ml-3 mr-1">
                        <TextField
                          required
                          id="outlined-required"
                          label="Email"
                          type="email"
                          style={{ width: '80%' }}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          error={!!formErrors.email}
                          helperText={formErrors.email}
                        />
                      </div>
                      <div className="form-group ml-3 mr-3">
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          style={{ width: '80%' }}
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          error={!!formErrors.password}
                          helperText={formErrors.password}
                          required
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </div>
                      <div className="form-group ml-3 mr-3">
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          style={{ width: '80%' }}
                          label="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          error={!!formErrors.confirmPassword}
                          helperText={formErrors.confirmPassword}
                          required
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </div>
                      <div className="form-group ml-3 mr-1">
                        <TextField
                          required
                          id="outlined-required"
                          label="Phone Number"
                          type="text"
                          style={{ width: '80%' }}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          error={!!formErrors.phoneNumber}
                          helperText={formErrors.phoneNumber}
                        />
                      </div>
                      <div className="form-group ml-3 mr-1">
                        <div className='signin'><p>Already have an account??</p><a href="/">Sign in</a></div>
                      </div>
                      <div className="form-group ml-3 mr-1">
                        <Button variant="contained" color="success" type="submit" style={{ backgroundColor: 'black', color: 'white' }}>
                          Register
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
    
  );
};

export default Register;
