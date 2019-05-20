import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import {closeModal, login, OPEN_LOGIN_FORM_DIALOG, OPEN_TEACHER_FORM_DIALOG} from "../actions";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";

const styles = (theme) => ({
  formControl: {
    marginTop: theme.spacing.unit,
    width: "100%",
  },
});

class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.editingTeacher
    };
  }

  handleClose = () => {
    this.props.dispatchClose();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submit = () => {
    this.props.submit(this.state.username, this.state.password);
  };

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({...nextProps.editingTeacher});
  }

  render() {
    const {classes, departments} = this.props;
    const firstOptions = Object.values(departments).filter((department) => {
      return department.father === null;
    });
    console.log(firstOptions);
    const secondOptions = {};
    firstOptions.map((father) => {
      secondOptions[father.id] = Object.values(departments).filter((dept) => dept.father && dept.father.id === father.id);
    });
    console.log(secondOptions);

    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.dispatchClose}
      >
        <DialogTitle>增加或修改教师档案</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus required fullWidth
            margin="dense" name="name" label="教师姓名"
            type="text" value={this.state.name}
            onChange={this.handleChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="school">学院名</InputLabel>
            <Select
              value={this.state.school}
              onChange={this.handleChange}
              inputProps={{
                name: 'school',
                id: 'school',
              }}
            >
              {
                firstOptions.map(item =>
                  <MenuItem key={item._links.href} value={item.id}>{item.name}</MenuItem>
                )
              }
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="department">系名</InputLabel>
            <Select
              value={this.state.department}
              onChange={this.handleChange}
              inputProps={{
                name: 'department',
                id: 'department',
              }}
            >
              {
                secondOptions.hasOwnProperty(this.state.school) ?
                  secondOptions[this.state.school].map(item =>
                    <MenuItem key={item._links.href} value={item.id}>{item.name}</MenuItem>
                  ) :
                  null
              }
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="dense" name="title" label="职称"
            type="text" value={this.state.title}
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            margin="dense" name="tel" label="办公电话号码"
            type="text" value={this.state.tel}
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            margin="dense" name="address" label="办公地址"
            type="text" value={this.state.address}
            onChange={this.handleChange}
          />
          <TextField
            fullWidth
            margin="dense" name="email" label="电子邮件"
            type="email" value={this.state.email}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            取消
          </Button>
          <Button onClick={this.submit} color="primary">
            确定
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modals.indexOf(OPEN_TEACHER_FORM_DIALOG) >= 0,
  editingTeacher: state.editingTeacher,
  departments: state.departments,
});

const mapDispatchToProps = dispatch => ({
  dispatchClose: () => dispatch(closeModal(OPEN_TEACHER_FORM_DIALOG)),
  dispatchLogin: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(TeacherForm)));
