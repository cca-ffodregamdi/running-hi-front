<div align="center">

## [FE] RUNNING HI : 러닝하이 

<Br>

<img width="250" alt="image" src="https://github.com/cca-ffodregamdi/.github/assets/119282494/ff52abf3-6873-4f68-8d35-c2ed0e5102e4">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fcca-ffodregamdi%2Frunning-hi-frontend&count_bg=%23FFA49F&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

<Br>

 
## Plus Repository
> ⚙️ **[BackEnd Repository](https://github.com/ca-ffodregamdi/running-hi-back)** <Br>
> ⚙️ **[Team Notion](https://www.notion.so/hammang/adff9907f8244768b9c080bc519b3a1f?pvs=4)**


<br>

## 배포 주소
> **개발 버전** :
> <br>
> **프론트 서버** :
<br>



## 기술 스택
#### Environment
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white">

#### Development
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
<br>
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![Html](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Css](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white)
<br>
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=JSON&logoColor=white)


#### Communication
![Discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)


<br>

## 프로젝트 아키텍처
#### **`✅ Atomic Design Pattern`**
```
─── 📁.github
└── 📁 node_modules

└── 📁 public
    ├── ✏️ favicon.ico
    ├── ✏️ index.html

└── 📁 src
   ├── 🗂️ assets
   │   ├── 💾 image
   │   │   ├── ✅ black.png
   │   │   ├── ✅ logo.svg

   ├── 🗂️ components
   │   ├── 💾 pages
   │   │   │   ├── 📑 Admin
   │   │   │   ├── 📑 Else
   │   │   │   ├── 📑 Log
   │   │   │   ├── 📑 Main
   │   │   │   │   ├── ✏️ MainHomePage
   │   │   │   │   │   ├── ✅ MainHomePage.css
   │   │   │   │   │   ├── ✅ MainHomePage.jsx
   │   │   │   │   ├── ✏️ MyFeedPage
   │   │   │   │   │   ├── ✅ MyFeedPage.css
   │   │   │   │   │   ├── ✅ MyFeedPage.jsx
   │   │   │   │   ├── ✏️ MyPage
   │   │   │   │   │   ├── ✅ MyPage.css
   │   │   │   │   │   ├── ✅ MyPage.jsx
   │   │   │   ├── 📑 Post

   │   ├── 🗂️ UI [Common]
   │   │   ├── 💾 atoms
   │   │   │   ├── 📑 Button
   │   │   │   │   ├── ✏️ AboutBtn
   │   │   │   │   │   ├── ✅ AboutBtn.svg
   │   │   │   │   ├── ✏️ CheckBtn
   │   │   │   │   │   ├── ✅ CheckBtn.css
   │   │   │   │   │   ├── ✅ CheckBtn.jsx
   │   │   │   ├── 📑 Input
   │   │   │   │   ├── ✏️ InputField
   │   │   │   │   │   ├── ✅ InputField.css
   │   │   │   │   │   ├── ✅ InputField.jsx
   │   │   │   │   ├── ✏️ TextArea
   │   │   │   │   │   ├── ✅ TextArea.css
   │   │   │   │   │   ├── ✅ TextArea.jsx
   │   │   │   ├── 📑 Image
   │   │   │   │   ├── ✏️ Logo
   │   │   │   │   │   ├── ✅ Logo.svg
   │   │   ├── 💾 molecules
   │   │   │   ├── 📑 Else
   │   │   │   ├── 📑 Post
   │   │   ├── 💾 organisms
   │   │   │   ├── 📑 MiniPage
   │   │   │   ├── 📑 Modal
   └── ─── ─── ├── 📑 Most

   ├── 🗂️ router

   ├── 🗂️ fonts
   └── ── ├── ✏️ files

   │   ├── App.js
   │   ├── index.js
   └── ─── index.css

   │   ├── .gitignore
   │   ├── package-lock.json
   │   ├── package.json
   └── ── README.md
```
> ### Atomic Design Pattern 차용 이유
**`1️⃣ 모듈화와 재사용성 증대 | 각각의 작은 컴포넌트들은 독립적으로 개발되고 테스트되며 재사용`**<br>
**`2️⃣ 유지보수 용이성 | 변경이 필요한 부분을 찾고 수정하는 과정이 간소화`**<br> 
**`3️⃣ 확장 가능성 | 컴포넌트를 추가하거나 기존 컴포넌트를 교체하는 과정이 비교적 간단`**<br>
**`4️⃣ 테스트 용이성 | 작은 원자적인 컴포넌트들은 개별적으로 테스트하기 쉬`**<br>
**`5️⃣ 코드 가독성 및 이해도 향상 | 각 컴포넌트는 명확한 역할과 책임을 가지기 때문`**<br>

<Br>

## Design UI-UX

### **`Key Color & Fonts`**
<img width="1000" alt="image" src="https://github.com/cca-ffodregamdi/running-hi-frontend/assets/119282494/9381b4b0-7e28-4482-9c0b-8c55b3cf9e07"><br>
### **`Atoms`**
<img width="1000" alt="image" src="https://github.com/cca-ffodregamdi/running-hi-frontend/assets/119282494/3028181b-641f-491b-8fec-3dae61b328a0"> <br>
### **`organisms`**
<img width="1000" alt="image" src="https://github.com/cca-ffodregamdi/running-hi-frontend/assets/119282494/96b87125-c8da-4667-8abf-8cdc7b2c3ea0"> 

<br>
<br>



---
<br>

### ✅ Project Rules
* Issue가 생기면 Repository의 Issues에 기록하기
* main branch에 바로 push 금지! develop branch로 Pull requests 하기
* git convention을 지키기
* pr 전에 이슈 발행 필수, pr 할 때 이슈 번호 입력 필수!
* 이슈 하나는 본인이 하루 내에 해결할 수 있는 양으로 선정하기
* pr에 모든 사람이 코드 리뷰 남기기 (LGTM 금지🙅)

<br>
 
### ✅ Git Convention
| **Convention**  | **내용**                                                         |
|-----------------|----------------------------------------------------------------|
| **Feat**        | 새로운 기능 추가                                                      |
| **Design**      | CSS 등 사용자 UI 디자인 변경                                            |
| **style**  |  코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| **Docs** |	문서를 수정한 경우 |
| **BugFix**         | 버그 수정                                                          |
| **Chore** |	 기타 변경사항 [빌드 스크립트 수정, assets image, 패키지 매니저 등] |
| **Test**        | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음     |
| **Comment**     | 필요한 주석 추가 및 변경                                                 |
| **Rename**      | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                   |
| **Remove**      | 파일을 삭제하는 작업만 수행한 경우                                            |
| **Refactor** | 프로덕션 코드 리팩토링                                                   |

---------------------------------------------------
