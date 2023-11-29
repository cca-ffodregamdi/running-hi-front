export async function login(username, password) {
  const response = await fetch("https://15.165.120.114/api/v1/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.success) {
    localStorage.setItem("token", data.token);
    return { success: true };
  } else {
    return { success: false, message: data.message };
  }
}

// 로그아웃 요청
export function logout() {
  localStorage.removeItem("token");
}

// 로그인 상태 확인
export function isLoggedIn() {
  const token = localStorage.getItem("token");
  return !!token;
}
