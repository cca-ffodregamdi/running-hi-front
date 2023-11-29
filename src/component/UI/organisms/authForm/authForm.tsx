import axios from "axios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../assets/scss/ui/organisms/authForm.scss";

declare global {
  interface Window {
    daum: any; // 지도 모듈
  }
}

interface IAuthForm {
  isFormValid: boolean;
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  account: string;
  password: string;
  repassword: string;
  name: string;
  email: string;
  nickname: string;
  gender: string;
  age: string;
  address: string;
  zonecode: string; // 주소 검색을 위한 타입 정의
  // form에 사용되는 데이터 타입을 정의합니다.
}

const AuthForm: React.FC<IAuthForm> = ({ isFormValid, setIsFormValid }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("주소 검색");
  const [isIdValid, setIsIdValid] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm<IAuthForm>({ mode: "onBlur" });

  const onValid = (data: IAuthForm) => {
    if (data.password !== data.repassword) {
      setError(
        "repassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      showCorrectPassword();
    }
  };

  const handleCheckDuplicate = () => {
    const account = getValues("account");
    console.log(account);
    const qwe = { account: account };
    console.log(qwe);
    axios
      .post("http://localhost:8082/api/v1/verifyDuplicationId", qwe)
      .then((response) => {
        console.log("데이터가 잘 전송되었구나요");
        if (response.data.isDuplicate) {
          showDuplicateMessage();
        } else {
          showAvailableMessage();
        }
        setIsIdValid(true); // 중복확인 버튼 활성화
      })
      .catch((error) => {
        console.error("예기치 못한 에러가 발생했습니다.");
        showErrorToast();
        setIsIdValid(false); // 중복확인 버튼 비활성화
      });
  };

  const showDuplicateMessage = () => {
    const messageElement = document.getElementById("errormessage");
    messageElement.textContent = "중복된 아이디입니다.";
    messageElement.style.color = "red";
  };

  const showAvailableMessage = () => {
    const messageElement = document.getElementById("correctmessage");
    messageElement.textContent = "사용 가능한 아이디입니다.";
    messageElement.style.color = "green";
  };

  const showCorrectPassword = () => {
    const messageElement = document.getElementById("correctpassword");
    messageElement.textContent = "비밀번호가 일치합니다.";
    messageElement.style.color = "green";
  };

  const showErrorPassword = () => {
    const messageElement = document.getElementById("correctpassword");
    messageElement.textContent = "비밀번호가 일치하지 않습니다.";
    messageElement.style.color = "#c33434";
  };

  const showErrorToast = () => {
    const toastElement = document.getElementById("toast");
    toastElement.textContent = "오류가 발생했습니다. 다시 시도해주세요.";
    toastElement.classList.add("show");
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);
  };

  const onClickAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IAuthForm) {
        setAddress(data.address);
        (document.getElementById("addr") as HTMLInputElement).value =
          data.address;
        (document.getElementById("zipNo") as HTMLInputElement).value =
          data.zonecode;
        document.getElementById("addrDetail")?.focus();

        if (data.address) {
          setButtonText("주소 수정");
        }
      },
    }).open();
  };

  const onSubmit = (formData: IAuthForm) => {
    onValid(formData);
  };

  const { watch } = useForm<IAuthForm>({ mode: "onBlur" });
  const watchAllFields = watch();

  useEffect(() => {
    setIsFormValid(
      Object.values(watchAllFields).every((field) => field !== "")
    );
  }, [watchAllFields]);

  return (
    // handleSubmit 함수를 onSubmit props로 보내줍니다.
    <form className="inputinfo" onSubmit={handleSubmit(onValid)}>
      <fieldset>
        {/* --------------------------------------------------- 아이디 입력  ----------------------------------------------------------- */}

        <div className="headerName">
          <label htmlFor="account">아이디</label>
          <text className="necessary">*</text>
        </div>

        <input
          {...register("account", {
            required: "아이디는 필수로 입력해야 합니다.",
            minLength: {
              value: 5,
              message: "아이디는 5글자 이상으로 이루어져야 합니다.",
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,16}$/i,
              message:
                "아이디는 5-16자 이내이면서, 공백과 한글을 제외한 영어 소문자와 숫자로 이루어져야 합니다.",
            },
          })}
          placeholder="사용하실 아이디를 입력해 주세요."
          onChange={() => setIsIdValid(true)}
        />
        <button
          type="button"
          className="checkcheck"
          onClick={handleCheckDuplicate}
          disabled={!isIdValid}
        >
          중복 확인
        </button>
        <p className="error">{errors?.account?.message}</p>
        <div id="toast" className="toastText"></div>
        <div id="errormessage" className="errormessage"></div>
        <div id="correctmessage" className="correctmessage"></div>

        {/* ---------------------------------------------------  비밀번호 입력 ----------------------------------------------------------*/}

        <div className="nec_check">
          <label htmlFor="password">비밀번호</label>
          <text className="necessary">*</text>
        </div>

        <input
          type="password"
          {...register("password", {
            required: "비밀번호는 필수로 입력해야 합니다.",
            minLength: {
              value: 8,
              message:
                "비밀번호는 숫자, 영문 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.",
            },
            pattern: {
              value: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
              message:
                "비밀번호는 8-16자 이내이면서, 한글을 제외한 영어 대-소문자, 숫자와 영어로 이루어져야 합니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 16자 이내로 구성되어야 합니다.",
            },
          })}
          placeholder="비밀번호를 입력해 주세요"
        />
        <p className="error">{errors?.password?.message}</p>

        {/* ----------------------------------------------------- 비밀번호 재확인 ----------------------------------------------------- */}

        <div className="headerName">
          <label htmlFor="repassword">비밀번호 확인</label>
          <text className="necessary">*</text>
        </div>
        <input
          type="password"
          {...register("repassword", {
            required: "비밀번호가 일치하지 않습니다.",
            minLength: {
              value: 8,
              message:
                "비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.",
            },
          })}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          onChange={(e) => {
            const repassword = e.target.value;
            const password = getValues("password");
            if (password === repassword) {
              showCorrectPassword();
            } else {
              showErrorPassword();
            }
          }}
        />
        <p className="error">{errors?.repassword?.message}</p>
        <div id="correctpassword" className="correctmessage"></div>

        {/* -------------------------------------------------------- 이름 입력 ---------------------------------------------------------- */}

        <div className="headerName">
          <label htmlFor="name">이름</label>
          <text className="necessary">*</text>
        </div>
        <input
          {...register("name", {
            required: "이름은 필수로 입력해야 합니다.",
            minLength: {
              value: 2,
              message: "이름은 최소 2글자 이상으로 이루어져야 합니다.",
            },
            pattern: {
              value: /^[ㄱ-힣].{1,5}/,
              message: "이름은 2-5자 이내의 한글로만 이루어져야 합니다.",
            },
            maxLength: {
              value: 5,
              message: "이름은 최대 5글자까지 입력하실 수 있습니다.",
            },
          })}
          placeholder="이름을 입력해 주세요."
        />
        <p className="error">{errors?.name?.message}</p>

        {/*  -------------------------------------------------------  이메일 입력 ----------------------------------------------- */}

        <div className="headerName">
          <label htmlFor="email">이메일</label>
          <text className="necessary">*</text>
        </div>
        <div className="email_input">
          <input
            className="email_id"
            {...register("email", {
              // required: "이메일은 필수로 입력해야 합니다.",
              pattern: {
                value: /^([a-z0-9_\.-]{2,9})$/,
                message: "올바른 이메일 형식으로 입력해주세요.",
              },
            })}
            // placeholder="이메일을 입력해 주세요."
          />
          <text className="bridge">@</text>
          {/* <input className="box" id="domain-txt" type="text" /> */}
          <select className="box" id="domain-list">
            <option value="naver.com">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">gmail.com</option>
            <option value="hanmail.net">daum.net</option>
            <option value="hanmail.net">hanmail.net</option>
          </select>
          <button type="button" className="checkemail">
            인증번호 받기
          </button>
        </div>
        <p className="error">{errors?.email?.message}</p>
        {/* <p className="erroremail">{errors?.email?.message}</p> */}
        <input className="email_num" placeholder="인증번호를 입력해주세요." />
        <button type="button" className="checknum">
          인증번호 확인
        </button>

        {/* ----------------------------------------------------- 닉네임 입력 ------------------------------------------------------ */}

        <div className="headerName">
          <label htmlFor="nickname">닉네임</label>
          <text className="necessary">*</text>
        </div>
        <input
          {...register("nickname", {
            required: "닉네임은 필수로 입력해야 합니다.",
            minLength: {
              value: 3,
              message: "닉네임은 최소 3글자 이상으로 이루어져야 합니다.",
            },
            pattern: {
              value: /^[a-z0-9ㄱ-힣]{3,8}$/,
              message:
                "닉네임은 특수문자를 제외한 3~8자 이내의 한글 혹은 영.소문자, 숫자로 이루어져야 합니다.",
            },
            maxLength: {
              value: 8,
              message: "닉네임은 최대 8글자까지 입력하실 수 있습니다.",
            },
          })}
          placeholder="원하는 닉네임을 입력해 주세요."
        />
        <button type="submit" className="checkcheck">
          중복 확인
        </button>
        <p className="error">{errors?.nickname?.message}</p>

        {/* --------------------------------------------------------- 위치 입력 -------------------------------------------------------- */}

        <div className="headerName">
          <label htmlFor="location">위치</label>
          <text className="necessary">*</text>
          <text className="loc_info">
            보다 더 정확한 코스 추천을 위해서 받고있는 정보입니다
          </text>
        </div>
        <input id="zipNo" type="text" readOnly placeholder="우편번호" />
        <input
          className="address"
          id="addr"
          type="text"
          placeholder="주소"
          readOnly
          onClick={onClickAddr}
        />

        <button className="checkaddress" onClick={onClickAddr}>
          {buttonText}
          {/* 주소 검색 */}
        </button>

        {/* ----------------------------------------------------- 성별 및 연령대 선택  ---------------------------------------------------- */}

        <label htmlFor="gender_age">성별 및 연령대</label>
        <text className="loc_info">(선택)</text>
        <div className="genderage">
          <div className="gender_input">
            <select className="gender_box" id="gender-list">
              <option value="select_gender">성별</option>
              <option value="female">여성</option>
              <option value="male">남성</option>
              <option value="none">밝히고 싶지 않음</option>
            </select>
          </div>
          <div className="age_input">
            <select className="age_box" id="age-list">
              <option value="1">연령대</option>
              <option value="2">10세 이하</option>
              <option value="3">10 - 19</option>
              <option value="4">20 - 29</option>
              <option value="5">30 - 39</option>
              <option value="5">40 - 49</option>
              <option value="6">50세 이상</option>
            </select>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default AuthForm;
