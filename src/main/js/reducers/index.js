import {
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_DEPARTMENTS,
  UPDATE_TEACHERS,
  SET_PAGE,
  UPDATE_SEARCH,
  UPDATE_USER
} from '../actions';

const initialState = {
  teachers: {},
  departments: {},
  modals: [],
  pages: {
    number: 0,
    size: 20
  },
  user: {
    username: "",
    password: "",
    id: null,
  },
  search: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modals: state.modals.concat(action.obj)
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modals: state.modals.filter(item => item.id !== action.obj.id),
      };
    case SET_PAGE:
      return {
        ...state,
        pages: action.payload
      };
    case UPDATE_DEPARTMENTS:
      const departmentNameMap = {};
      action.payload.departments._embedded.departments.map((item, i) => {
        departmentNameMap[i + 1] = {
          id: i + 1,
          name: item.name,
          fatherId: item.fatherId
        };
      });

      return {
        ...state,
        departments: departmentNameMap,
      };
    case UPDATE_TEACHERS:
      return {
        ...state,
        teachers: action.payload.teachers
      };
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload.search
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
        }
      };
    default:
      return state;
  }
};
