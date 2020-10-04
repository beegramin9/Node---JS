// 콜백함수가 더이상 필요없음
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream')
                        (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000)
        })
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' })
                } else {
                    reject(new Error('no accesss'))
                }
            }, 1000)
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID:');
const password = prompt('enter your password:');

userStorage //
    .loginUser(id, password)
    .then(user => getRoles(user))
    .then(user => alert(`Hello ${user.name}, you are now a ${user.role}`))
    .catch(console.log(user))
