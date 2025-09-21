document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('blogForm');
    if(form){
        form.addEventListener('submit', handleSubmit);
    }
});



function handleSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById('postTitle');
    const contentInput = document.getElementById('postContent');

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if(title === '' || content === ''){
        alert('제목과 내용을 모두 입력해주세요');
        return;
    }

    alert('블로그 글이 성공적으로 작성되었습니다!');
    
    document.getElementById('blogForm').reset();
}
