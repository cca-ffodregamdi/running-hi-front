import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Main
import MyPage from "../component/pages/main/myPage/myPage";
import MyFeedPage from "../component/pages/main/myFeedPage/myFeedPage";
import MainHomePage from "../component/pages/main/mainHomePage/mainHomePage";

// Login
import LoginPage from "../component/pages/login/loginPage/loginPage";
import FindIdPage from "../component/pages/login/findIdPage/findIdPage";
import FindPwPage from "../component/pages/login/findPwPage/findPwPage";
import SignUpPage from "../component/pages/login/signUpPage/signUpPage";

// Else
import NotFoundPage from "../component/pages/else/notFoundPage/notFoundPage";
import TermsofServicePage from "../component/pages/else/termsofServicePage/termsofServicePage";
import CustomerSupportPage from "../component/pages/else/customerSupportPage/customerSupportPage";
import CustomerFeedbackPage from "../component/pages/else/customerFeedbackPage/customerFeedbackPage";

// Admin
import AdminPage from "../component/pages/admin/adminPage/adminPage";
import DashBoardPage from "../component/pages/admin/dashBoardPage/dashBoardPage";
import TagManagementPage from "../component/pages/admin/tagManagementPage/tagManagementPage";
import ReportManagementPage from "../component/pages/admin/reportManagementPage/reportManagementPage";
import CategoryManagementPage from "../component/pages/admin/categoryManagementPage/categoryManagementPage";

// Post
import Comment from "../component/pages/post/comment/comment";
import PostEditPage from "../component/pages/post/postEditPage/postEditPage";
import PostListPage from "../component/pages/post/postListPage/postListPage";
import PostCreatePage from "../component/pages/post/postCreatePage/postCreatePage";
import PostDeletePage from "../component/pages/post/postDeletePage/postDeletePage";
import PostDetailPage from "../component/pages/post/postDetailPage/postDetailPage";

const AllRouters = () => {
  return (
    <>
      <Routes>
        {/* Main 관련 Routes */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/myfeed" element={<MyFeedPage />} />
        <Route path="/mainhome" element={<MainHomePage />} />

        {/* Login 관련 Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/findpw" element={<FindPwPage />} />
        <Route path="/findid" element={<FindIdPage />} />

        {/* Post 관련 Routes */}
        <Route path="/comment" element={<Comment />} />
        <Route path="/postedit" element={<PostEditPage />} />
        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/postcreate" element={<PostCreatePage />} />
        <Route path="/postdelete" element={<PostDeletePage />} />
        <Route path="/postdetail" element={<PostDetailPage />} />

        {/* Admin 관련 Routes */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/tagmanagement" element={<TagManagementPage />} />
        <Route path="/reportmanagement" element={<ReportManagementPage />} />
        <Route
          path="/categorymanagement"
          element={<CategoryManagementPage />}
        />

        {/* Else 관련 Routes */}
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="/termsofservice" element={<TermsofServicePage />} />
        <Route path="/customersupport" element={<CustomerSupportPage />} />
        <Route path="/customerfeedback" element={<CustomerFeedbackPage />} />
      </Routes>
    </>
  );
};

export default AllRouters;