import client from "../utils/client";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const UPDATE_DEPARTMENTS = "UPDATE_DEPARTMENTS";
export const UPDATE_TEACHERS = "UPDATE_TEACHERS";
export const SET_PAGE = "SET_PAGE";
export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_EDITING_TEACHER = "UPDATE_EDITING_TEACHER";

export const OPEN_LOGIN_FORM_DIALOG = "LOGIN_FORM_DIALOG";
export const OPEN_RESET_PASSWORD_DIALOG = "RESET_PASSWORD_DIALOG";
export const OPEN_TEACHER_FORM_DIALOG_CREATE = "OPEN_TEACHER_FORM_DIALOG_CREATE";
export const OPEN_TEACHER_FORM_DIALOG_EDIT = "OPEN_TEACHER_FORM_DIALOG_EDIT";

export const openModal = (obj) => ({
  type: OPEN_MODAL,
  obj,
});

export const closeModal = (obj) => ({
  type: CLOSE_MODAL,
  obj,
});

export const setPage = (pageNumber, pageSize) => ({
  type: SET_PAGE,
  payload: {
    number: pageNumber,
    size: pageSize,
  }
});

export const updateDepartments = () => {
  return (dispatch) => {
    client({
      method: "GET",
      path: "/api/departments",
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      dispatch({
        type: UPDATE_DEPARTMENTS,
        payload: {
          departments: response.entity
        }
      })
    });
  }
};

export const updateTeachers = () => {
  return (dispatch, getState) => {
    const curState = getState();
    let queryPath = `/api/teachers?page=${curState.pages.number}&size=${curState.pages.size}`;
    if (curState.search) {
      queryPath = `/api/teachers/search/findTeachersByKeyword?keyword=${curState.search}&` +
                  `page=${curState.pages.number}&size=${curState.pages.size}`
    }
    client({
      method: "GET",
      path: queryPath,
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      dispatch({
        type: UPDATE_TEACHERS,
        payload: {
          teachers: response.entity
        }
      })
    });
  };
};

export const updateSearch = (search) => ({
  type: UPDATE_SEARCH,
  payload: {
    search: search
  }
});

export const login = (username, password) => {
  return (dispatch, getState) => {
    if (!username) {
      dispatch({
        type: UPDATE_USER,
        payload: {
          id: null,
          username: "",
          password: ""
        }
      });
    } else {
      client({
        method: "GET",
        path: `/api/users/search/findUserByUsernameAndPassword?username=${username}&password=${password}`
      }).then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_USER,
          payload: {
            id: response.entity.id,
            username: username,
            password: password,
          }
        })
      }).catch((err) => {
      });
    }
  };
};

export const updateUser = (password) => {
  return (dispatch, getState) => {
    const state = getState();
    const data = {
      ...state.user,
      password: password
    };
    client({
      method: "PUT",
      path: `/api/users/${state.user.id}`,
      entity: data,
    }).then(() => {
      dispatch({
        type: UPDATE_USER,
        payload: data
      })
    });
  }
};

export const createTeacher = (teacher) => {
  return (dispatch) => {
    client({
      method: "POST",
      path: `/api/teachers`,
      entity: teacher,
    }).then(() => {
      dispatch(updateTeachers());
    });
  }
};

export const updateTeacher = (uri, teacher) => {
  return (dispatch) => {
    client({
      method: "PUT",
      path: uri,
      entity: teacher,
    }).then(() => {
      dispatch(updateTeachers());
    });
  };
};

export const deleteTeacher = (uri) => {
  return (dispatch) => {
    client({
      method: "DELETE",
      path: uri
    }).then(() => {
      dispatch(updateTeachers());
    })
  }
};

export const updateEditingTeacher = (teacher) => ({
  type: UPDATE_EDITING_TEACHER,
  payload: teacher
});
