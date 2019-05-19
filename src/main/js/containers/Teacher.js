import React from "react";
import TableCell from "@material-ui/core/TableCell";
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";

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
      </TableRow>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(Teacher)));
