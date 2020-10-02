/* 사용자의 데이터를 백엔드(서버)에서 받아오는 코드 */

class UserStorage {
    loginUser(id, password, onSuccess/* 콜백함수 */, onError/* 콜백함수 */) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
                /* Id를 전달해주는 가상의 함수 */
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000)
    }
}

// 1. 사용자에게 ID/Password를 입력받아오기
// 2. 로그인하기
// 3. 로그인이 성공적이었다면 아이디를 받아와서 Roles를 받아온다.
// 4. 사용자의 이름과 역할을 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your ID:');
const password = prompt('enter your password:');

userStorage.loginUser(id, password,
    (user) => {
        userStorage.getRoles(user,
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you are now a ${userWithRole.role}.`)
            },
            (error) => console.log(error))
    },
    (error) => console.log('Error'));