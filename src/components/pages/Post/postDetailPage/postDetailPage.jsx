<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="postDetailPage.css">
    <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
    <title>게시글 상세 페이지</title>
</head>
<body>
    <div class="container">
        <h1>게시글 제목</h1>
        <p class="post-meta">작성일: 2023년 8월 17일</p>
        <div class="post-content">
            <p>
                게시글 내용의 일부... <br>
                여기에 게시글의 내용을 자세히 작성하세요.
            </p>
        </div>
        <a href="post_list.html" class="back-link">목록으로 돌아가기</a>
        <br>
    
        <div class="comment-section">
            <h2>댓글</h2>
            <form class="comment-form">
                <textarea name="comment" rows="4" placeholder="댓글을 입력하세요..."></textarea>
                <button type="submit">댓글 작성</button>
            </form>
            <div class="comments">
                <div class="comment">
                    <p class="comment-text">이 게시글은 정말 유용하네요!</p>
                    <p class="comment-meta">작성자: 사용자1 | 작성일: 2023년 8월 17일</p>
                </div>
                <!-- 추가 댓글 아이템 -->
            </div>
        </div>
        <a href="post_list.html" class="back-link">목록으로 돌아가기</a>
    </div>
    </div>

</body>
</html>
