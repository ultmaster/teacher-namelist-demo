import client from "../utils/client";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const UPDATE_DEPARTMENTS = "UPDATE_DEPARTMENTS";
export const UPDATE_TEACHERS = "UPDATE_TEACHERS";
export const SET_PAGE = "SET_PAGE";
export const UPDATE_SEARCH = "UPDATE_SEARCH";

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
