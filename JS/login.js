"use strict";

function login() {
  var id = document.querySelector('#user_id')
  var pwd = document.querySelector('#user_password')

  if(id.value=="" || pwd.value=="") {
    alert("아이디 또는 패스워드를 입력해 주세요")
  }
}