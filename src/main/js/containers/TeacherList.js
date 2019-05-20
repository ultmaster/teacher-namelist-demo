import React from "react";
import Teacher from "./Teacher";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {connect} from "react-redux";
import withRoot from "../withRoot";
import {withStyles} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import {setPage, updateTeachers} from "../actions";

const styles = theme => ({});

class TeacherList extends React.Component {
  state = {
    selected: [],
  };

  handleChangePage = (event, page) => {
    this.props.dispatch(setPage(page, this.props.teachers.page.size));
  };

  handleChangeRowsPerPage = (event) => {
    this.props.dispatch(setPage(0, event.target.value));
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.pages.number !== this.props.pages.number ||
        nextProps.pages.size !== this.props.pages.size ||
        nextProps.search !== this.props.search) {
      this.props.dispatch(updateTeachers());
    }
  }

  render() {
    if (!this.props.teachers.hasOwnProperty("_embedded")) return <noscript/>;
    const {size, totalPages, totalElements, number} = this.props.teachers.page;
    const teachers = this.props.teachers._embedded.teachers.map(teacher =>
      <Teacher key={teacher._links.self.href} teacher={teacher}/>
    );
    return (
      <Paper>
        <Table padding={"dense"}>
          <TableHead>
            <TableRow>
              <TableCell>学院名</TableCell>
              <TableCell>系名</TableCell>
              <TableCell>教师姓名</TableCell>
              <TableCell>职称</TableCell>
              <TableCell>办公电话号码</TableCell>
              <TableCell>办公地址</TableCell>
              <TableCell>电子邮件</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={totalElements}
          rowsPerPage={size}
          page={number}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  pages: state.pages,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps,
  mapDispatchToProps)(withRoot(withStyles(styles)(TeacherList)));
