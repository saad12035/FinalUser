import './Login.css';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import {useHistory} from "react-router-dom";
import {Layout} from "antd";
import {useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const {Header, Footer, Content} = Layout;

function Login() {
  const router = useHistory();
  const [visible, setVisible] = useState(false);
  const [student, setStudent] = useState(false);
  const [counsellor, setCounsellor] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onStudent = () => {
    setStudent(true);
    setCounsellor(false);
  };
  const onCounsellor = () => {
    setStudent(false);
    setCounsellor(true);
  };
  return (
    <>
      <div className="Login">
        <div className="container9">
          <Grid container spacing={1} className="main-box">
            <Grid container item xs={12}>
              <Grid item xs={false} sm={6} md={7} className="image"/>
              <Grid item xs={12} sm={6} md={5} className="form-box">
                <div className="body-form">
                  <form>
                    <div className="input-group mb-3">
                                        <span className="input-group-img"><PersonIcon
                                          style={{fontSize: 40, color: "white"}}/></span>
                      <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="input-group">
                                        <span className="input-group-img"><LockOpenIcon
                                          style={{fontSize: 40, color: "white"}}/></span>
                      <input type="text" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="radio-but">
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="Student"
                                            control={<Radio onChange={onStudent} style={{color: "white"}}/>}
                                            label="Student"/>
                          <FormControlLabel value="Counsellor"
                                            control={<Radio onChange={onCounsellor} style={{color: "white"}}/>}
                                            label="Counsellor"/>

                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div className="loginBox">
                      <div className="rememberMe">
                        <input type="checkbox"/> Remember Me
                      </div>
                      <button onClick={() => {
                        if (student == true) {
                          router.push("/dashboard-student-home")
                        }
                        if (counsellor == true) {
                          router.push("/dashboard-counsellor-home")
                        }
                      }} type="button" className="loginButton">LOGIN
                      </button>

                    </div>
                  </form>
                </div>
                <h1 className="signup-pop"><a href="/signup">Create an account</a></h1>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Login;
