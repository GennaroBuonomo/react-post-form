import React from 'react'

const PostForm = () => {
  return (
   <div className="container mt-4 text-center">
    <h1><strong>Crea un nuovo post</strong></h1>
    <form>
      <div className="mb-3">
        <label for="author" className="form-label">Autore</label>
        <input type="text" className="form-control" id="author" name="author" />
      </div>
    </form>
   </div>
  )
}

export default PostForm

