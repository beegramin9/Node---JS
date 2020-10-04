class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream')
                    (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' })
            } else {
                onError(new Error('no accesss'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID:');
const password = prompt('enter your password:')

userStorage.loginUser(id, password,
    user => {
        userStorage.getRoles(user, userWithRole => {
            alert(`Hello ${userWithRole.name}, you are now a ${userWithRole.role}`)
        },
            error => { console.log(error) });
    },
    error => console.log(error)
)