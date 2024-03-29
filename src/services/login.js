import AxiosClient from './AxiosClient';

const login = {
    signup: (email, fullName, confirmPassword, phoneNumber, username) => {
        return AxiosClient.post('auth/signup',{
            "email": email,
            "fullName": fullName,
            "password": confirmPassword,
            "phoneNumber": phoneNumber,
            "roles": [
              "user"
            ],
            "username": username
          }
        );
    },
    signin: (password, username) => {
        return AxiosClient.post('auth/signin',{
            "password": password,
            "username": username
          }
        );
    },
};

export default login;
