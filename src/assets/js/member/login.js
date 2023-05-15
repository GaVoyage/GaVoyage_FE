import api from "../util/axios.js";
import { $, createElement } from "../util/elementTool.js";

export async function onLogin() {
  const id = $("#loginid").value;
  const pw = $("#loginpw").value;

  let login = {
    username: id,
    password: pw,
  };

  const searchUrl = "/login";
  const res = await api.post(searchUrl, login);
  console.log(res);
  let token = res.headers["authorization"].split(" ")[1];
  console.log(token, "!!");
  const data = await res.data;
  console.log(data);
  data["token"] = token;
  console.log(data);

  if (res.status === 200) {
    this.$cookies.set("accesstoken", data, "1d");
    alert("Welcome!");
    window.location.reload();
    // this.$router.push("/");
  }
}

export function onLogout() {
  this.$cookies.remove("accesstoken");
  window.location.reload();
}

export function changeHeader() {
  console.log(this.$cookies.isKey("accesstoken"));
  if (this.$cookies.isKey("accesstoken")) {
    //로그인 된 상태
    $("#loginnav").style.display = "none";
    $("#joinnav").style.display = "none";
    $("#profilenav").style.display = "block";
    console.log(this.$cookies.get("accesstoken"));
    $(".profile").innerHTML = this.$cookies.get("accesstoken").nickname + " 님";
    if (this.$cookies.get("accesstoken").nickname.startsWith("관리자")) {
      // 관리자 페이지
      let li = createElement("li");
      //data-v-1f234af1
      li.innerHTML += `<i class="me-2 fa fa-lock" aria-hidden="true"></i>`;
      li.innerHTML += "회원관리";
      li.style.cssText =
        "padding : 0.5em 1em; list-style : none; cursor : pointer; border-radius : 5px; position : relative; margin : 0;";
      $(".list").appendChild(li);
    }
  } else {
    //로그아웃된 상태
    $("#loginnav").style.display = "block";
    $("#joinnav").style.display = "block";
    $("#profilenav").style.display = "none";
  }
}
