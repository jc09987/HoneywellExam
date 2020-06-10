export const FETCH_CONTENT_BEGIN = 'FETCH_CONTENT_BEGIN';
export const FETCH_CONTENT_SUCCESS = 'FETCH_CONTENT_SUCCESS';
export const FETCH_CONTENT_FAILURE = 'FETCH_CONTENT_FAILURE';

export const ADD_STUDENT_BEGIN = 'ADD_STUDENT_BEGIN';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

export const DELETE_STUDENT_BEGIN = 'DELETE_STUDENT_BEGIN';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';

const studentsApiUrl = process.env.STUDENTS_API_URL;

export const fetchContentBegin = () => ({
  type: FETCH_CONTENT_BEGIN
});

export const fetchContentSuccess = data => ({
  type: FETCH_CONTENT_SUCCESS,
  payload: { data }
});

export const fetchContentFailure = error => ({
  type: FETCH_CONTENT_FAILURE,
  payload: { error }
});

export const addStudentBegin = () => ({
  type: ADD_STUDENT_BEGIN
});

export const addStudentSuccess = data => ({
  type: ADD_STUDENT_SUCCESS,
  payload: { data }
});

export const addStudentFailure = error => ({
  type: ADD_STUDENT_FAILURE,
  payload: { error }
});

export const deleteStudentBegin = () => ({
  type: DELETE_STUDENT_BEGIN
});

export const deleteStudentSuccess = data => ({
  type: DELETE_STUDENT_SUCCESS,
  payload: { data }
});

export const deleteStudentFailure = error => ({
  type: DELETE_STUDENT_FAILURE,
  payload: { error }
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getContentFromAPI() {
  const url = `${studentsApiUrl}`;
  return fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: '*/*'
    },
    redirect: 'follow',
    referrer: 'no-referrer'
  }).then(handleErrors).then(res => res.json());
}

function sendStudentToAPI(data) {
  return fetch(studentsApiUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleErrors).then(res => res.json());
}

function deleteStudentFromAPI(id) {
  const url = `${studentsApiUrl}/${id}`;

  return fetch(url, {
    method: 'DELETE'
  }).then(handleErrors).then(res => res.json());
}

export function fetchContent() {
  return (dispatch) => {
    dispatch(fetchContentBegin());
    return getContentFromAPI()
      .then((data) => {
        dispatch(fetchContentSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchContentFailure(error)));
  };
}

export function addStudent(student) {
  return (dispatch) => {
    dispatch(addStudentBegin());
    return sendStudentToAPI(student)
      .then((data) => {
        dispatch(addStudentSuccess(data));
        return data;
      })
      .catch(error => dispatch(addStudentFailure(error)));
  };
}

export function deleteStudent(id) {
  return (dispatch) => {
    dispatch(deleteStudentBegin());
    return deleteStudentFromAPI(id)
      .then((data) => {
        dispatch(deleteStudentSuccess(data));
        return data;
      })
      .catch(error => dispatch(deleteStudentFailure(error)));
  };
}
