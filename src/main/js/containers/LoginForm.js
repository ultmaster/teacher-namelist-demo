import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import {closeModal, login, OPEN_LOGIN_FORM_DIALOG} from "../actions";

const styles = (theme) => ({});

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  };

  handleClose = () => {
    this.props.dispatchClose();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLogin = () => {
    this.props.dispatchLogin(this.state.username, this.state.password);
  };

  render() {
    return (
      <Dialog
        open={this.props.open && !this.props.user.id}
        onClose={this.props.dispatchClose}
      >
        <DialogTitle>登录</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus required
            margin="dense"
            name="username"
            label="用户名"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            name="password"
            label="密码"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            取消
          </Button>
          <Button onClick={this.submitLogin} color="primary">
            登录
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modals.indexOf(OPEN_LOGIN_FORM_DIALOG) >= 0,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  dispatchClose: () => dispatch(closeModal(OPEN_LOGIN_FORM_DIALOG)),
  dispatchLogin: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(LoginForm)));
