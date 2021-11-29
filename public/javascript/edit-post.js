async function editFormHandler(event) {
    event.preventDefault();
  
    const post_text = document.querySelector('input[name="post-text"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    

    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  console.log(post_text);
    if (response.ok) {
      document.location.replace('/dashboard/');
      // console.log(req.body.post_text);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);