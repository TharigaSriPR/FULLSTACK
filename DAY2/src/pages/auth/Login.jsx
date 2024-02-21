import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useState } from 'react';
import '/src/assets/css/Register.css'; 

function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert('Invalid email address');

            return;
        }
        else{
            navigate("/MYAPP/user/*");
        }

    };

    return (
   
            
            
                
                        
                            <div className="container1">
                        
                                    <div className="card1">
                                        <div className="header">
                                            <div className="card-heading text-primary">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="loginform">
                                                
                                                    <div className="header " >
                                                        <div className="notice">
                                                            <div>
                                                            <h1>Welcome to our website!</h1>
                                                                <br></br>
                                                                <h2>Sign In</h2>
                                                            </div>
                                                            <div>
                                                                <br/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form id="logf" onSubmit={handleSubmit}>
                                                        <div className="form-group ml-3 mr-1">
                                                            <TextField
                                                                required
                                                                id="outlined-required"
                                                                label="Email"
                                                                type="email"
                                                                style={{ width: '80%' }}
                                                                value={email}
                                                                onChange={e => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group ml-3 mr-3">
                                                            <OutlinedInput
                                                                id="outlined-adornment-password"
                                                                type={showPassword ? 'text' : 'password'}
                                                                style={{ width: '80%' }}
                                                                label="Password"
                                                                value={password}
                                                                onChange={e => setPassword(e.target.value)}
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
                                                            <div className='signin'><p>Dont have an account??</p><a href="/MYAPP/Register">Sign up</a></div>
                                                        </div>
                                                        <div className="form-group ml-3 mr-1">
                                                            <Button variant="contained" color="success" type="submit" style={{ backgroundColor: 'purple', color: 'white' }}>
                                                                Login
                                                            </Button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                          
                   
                    
           
        
    );
}

export default Login;
