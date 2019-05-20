import React from "react";
import TableCell from "@material-ui/core/TableCell";
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import {deleteTeacher, OPEN_TEACHER_FORM_DIALOG_EDIT, openModal, updateEditingTeacher} from "../actions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({});

class Teacher extends React.Component {
  render() {
    const teacher = this.props.teacher;
    return (
      <TableRow>
        <TableCell>
          {teacher._embedded.department.father.name}
        </TableCell>
        <TableCell>
          {teacher._embedded.department.name}
        </TableCell>
        <TableCell>{teacher.name}</TableCell>
        <TableCell>{teacher.title}</TableCell>
        <TableCell>{teacher.tel}</TableCell>
        <TableCell>{teacher.address}</TableCell>
        <TableCell>{teacher.email}</TableCell>
        {
          this.props.user.id ? [
            <TableCell>
              <IconButton onClick={() => {
                this.props.updateEditingTeacher(teacher);
                this.props.dispatch(openModal(OPEN_TEACHER_FORM_DIALOG_EDIT));
              }}>
                <EditIcon/>
              </IconButton>
            </TableCell>,
            <TableCell>
              <IconButton onClick={() => {
                this.props.deleteTeacher(teacher);
              }}>
                <DeleteIcon/>
              </IconButton>
            </TableCell>] : null
        }
      </TableRow>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  updateEditingTeacher: (teacher) => dispatch(updateEditingTeacher(teacher)),
  deleteTeacher: (teacher) => dispatch(deleteTeacher(teacher._links.self.href))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(Teacher)));
