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

      <div className="mb-3">
        <label for="title" className="form-label" >Titolo</label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>

      <div className="mb-3">
        <label for="body" className="form-label">Contenuto</label>
        <textarea className="form-control" id="body" name="body" rows="5"></textarea>
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="public" name="public" />
        <label className="form-check-label" for="public">
          Reandilo Pubblico
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Invia il Post</button>
    </form>
   </div>
  )
}

export default PostForm

