import firebase from "../../src/firebase/firebaseConfig";

// 이메일 인증 링크 전송 함수
export const sendEmailVerification = (email) => {
  firebase
    .auth()
    .sendSignInLinkToEmail(email, {
      url: "https://your-app-url.com", // 인증 완료 링크가 리다이렉트될 URL
      handleCodeInApp: true, // 앱에서 인증 코드 처리 여부
    })
    .then(() => {
      // 이메일 전송 성공 처리
    })
    .catch((error) => {
      // 이메일 전송 실패 처리
      console.error(error);
    });
};
