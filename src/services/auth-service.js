import axios from 'axios'

class AuthService {
    login(user) {
        return axios
            .post(process.env.VUE_APP_ROOT_API + '/auth', {
                login: user.login,
                password: user.password
            })
            .then(response => {
                //console.log('in auth service response.data.data: ', response.data.data)
                if (response.data.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data.data))
                }
                //console.log("response.data = ", response.data)
                return response.data.data
            })
    }

    logout() {
        console.log('LOGING OUT FROM THE APP!')
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(process.env.VUE_APP_ROOT_API + '/users', {
            login: user.login,
            email: user.email,
            first_name: user.first_name,
            second_name: user.second_name,
            password: user.password
        })
    }
}

export default new AuthService()
