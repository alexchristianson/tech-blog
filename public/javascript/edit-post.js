async function editFormHandler(event) {
    event.preventDefault();
  
    const postInput = document.querySelector('input[name="post-text"]').value.trim();
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: 
      {
        post_text: postInput
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);