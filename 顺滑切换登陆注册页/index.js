
// 显示container：
let container = document.getElementsByClassName('container')[0]
container.className += ' container-show'

// 切换登陆和注册
// 获取对象
let toRegister = document.getElementsByClassName('go-register-btn')[0],
    toLogin = document.getElementsByClassName('go-login-btn')[0],
    registerBox = document.getElementsByClassName('register-box')[0],
    loginBox = document.getElementsByClassName('login-box')[0]
// 绑定事件
toRegister.onclick = ()=>{
    loginBox.className += ' animate_login';
    registerBox.className += ' animate_register'
}
toLogin.onclick = ()=>{
    loginBox.classList.remove('animate_login');
    registerBox.classList.remove('animate_register')
}