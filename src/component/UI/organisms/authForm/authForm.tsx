import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../../../assets/scss/ui/organisms/authForm.scss";

interface IAuthForm {
  account: string;
  password: string;
  repassword: string;
  name: string;
  email: string;
  nickname: string;
  gender: string;
  age: string;
  // form에 사용되는 데이터 타입을 정의합니다.
}

const AuthForm: React.FC<IAuthForm> = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit, // Form을 제출했을 때 실행할 콜백함수
    setError,
  } = useForm<IAuthForm>({ mode: "onBlur" });

  // submitHandler
  const onValid = (data: IAuthForm) => {
    if (data.password !== data.repassword) {
      setError(
        "repassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
  };

  const onSubmit = (formData: IAuthForm) => {
    onValid(formData); // 폼 데이터를 onValid 함수에 전달
  };

  return (
    // handleSubmit 함수를 onSubmit props로 보내줍니다.
    <form className="inputinfo" onSubmit={handleSubmit(onValid)}>
      <fieldset>
        <label htmlFor="account">아이디</label>
        <input
          {...register("account", {
            required: "아이디 입력은 필수입니다.",
            minLength: {
              value: 5,
              message: "아이디는 5글자 이상으로 이루어져야 합니다.",
            },
            pattern: {
              value: /^(?=.*[a-z][0-9])\s.{5,16}$/,
              message:
                "아이디는 5-16자 이내이면서, 공백과 한글을 제외한 영어 소문자와 숫자로 이루어져야 합니다.",
            },
          })}
          placeholder="사용하실 아이디를 입력해 주세요."
        />
        <button type="button" className="checkcheck">
          중복 확인
        </button>
        <p className="error">{errors?.account?.message}</p>

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호 입력은 필수입니다.",
            minLength: {
              value: 8,
              message:
                "비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.",
            },
            pattern: {
              value:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
              message:
                "비밀번호는 8-16자 이내이면서, 한글을 제외한 영어 대-소문자, 숫자와 영어로 이루어져야 합니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 16자 이내로 구성되어야 합니다.",
            },
          })}
          placeholder="비밀번호를 입력해 주세요."
        />
        <p className="error">{errors?.password?.message}</p>

        <label htmlFor="repassword">비밀번호 확인</label>
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
        />
        <p className="error">{errors?.repassword?.message}</p>

        <label htmlFor="name">이름</label>
        <input
          {...register("name", {
            required: "이름 입력은 필수입니다.",
            minLength: {
              value: 2,
              message: "이름은 최소 2글자 이상으로 이루어져야 합니다.",
            },
            pattern: {
              value: /^[ㄱ-힣].{2,5}/,
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

        <label htmlFor="email">이메일</label>
        <input
          {...register("email", {
            required: "이메일은 필수로 입력해야 합니다.",
            pattern: {
              value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
              message: "올바른 이메일 형식으로 입력해주세요.",
            },
          })}
          placeholder="이메일을 입력해 주세요."
        />
        <button type="button" className="checkemail">
          이메일 인증
        </button>
        <p className="error">{errors?.email?.message}</p>

        <label htmlFor="nickname">닉네임</label>
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
        <button type="button" className="checkcheck">
          중복 확인
        </button>
        <p className="error">{errors?.nickname?.message}</p>

        {/* <label htmlFor="gender">성별</label>
        <label htmlFor="age">연령대</label> */}
      </fieldset>
    </form>
  );
};

export default AuthForm;
