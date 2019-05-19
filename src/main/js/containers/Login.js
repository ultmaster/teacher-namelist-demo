import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputIcon from "@material-ui/icons/Input";
import LockIcon from "@material-ui/icons/Lock";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import LoginForm from "./LoginForm";
import {login, OPEN_LOGIN_FORM_DIALOG, OPEN_RESET_PASSWORD_DIALOG, openModal} from "../actions";
import PasswordResetForm from "./PasswordResetForm";

const styles = (theme) => ({});

class Login extends React.Component {
  render() {
    return <React.Fragment>
      <List>
        {this.props.user.id ?
          [
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary={this.props.user.username}/>
            </ListItem>,
            <ListItem button onClick={() => this.props.dispatch(openModal(OPEN_RESET_PASSWORD_DIALOG))}>
              <ListItemIcon>
                <LockIcon/>
              </ListItemIcon>
              <ListItemText primary="修改密码"/>
            </ListItem>,
            <ListItem button onClick={() => this.props.dispatch(login("", ""))}>
              <ListItemIcon>
                <InputIcon/>
              </ListItemIcon>
              <ListItemText primary="登出"/>
            </ListItem>,
          ] :
          <ListItem button onClick={() => this.props.dispatch(openModal(OPEN_LOGIN_FORM_DIALOG))}>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="登录"/>
          </ListItem>
        }
      </List>
      <LoginForm/>
      <PasswordResetForm/>
    </React.Fragment>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(Login)));
