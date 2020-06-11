export const FETCH_STUDENT_BEGIN = 'FETCH_STUDENT_BEGIN';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENT_FAILURE';

const studentsApiUrl = process.env.STUDENTS_API_URL;

export const fetchStudentBegin = () => ({
  type: FETCH_STUDENT_BEGIN
});

export const fetchStudentSuccess = data => ({
  type: FETCH_STUDENT_SUCCESS,
  payload: { data }
});

export const fetchStudentFailure = error => ({
  type: FETCH_STUDENT_FAILURE,
  payload: { error }
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getStudentFromAPI(id) {
  const url = `${studentsApiUrl}/student/${id}`;
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

export function fetchStudent(id) {
  return (dispatch) => {
    dispatch(fetchStudentBegin());
    return getStudentFromAPI(id)
      .then((data) => {
        dispatch(fetchStudentSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchStudentFailure(error)));
  };
}
