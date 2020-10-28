import Api from '../../api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  return Api(
    // ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
    ApiConstants.LOGIN,
    {username, password},
    'POST',
    null,
  );
}
