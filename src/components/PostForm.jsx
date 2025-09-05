import { useState } from "react"
import axios from "axios"

const PostForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    public: false, 
    body: "",
  })

const handleChange = (e) => {
  const { value, name, type, checked } = e.target;

  const newFormData = {
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  };

  setFormData(newFormData);
};

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
  .then((resp) => {
    console.log(resp.data);
  })
}

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <h1>Post Form</h1>
        </div>
        <div className="col-12">
          <form onSabmit={handleSubmit}>
            <div className="row gy-3">
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Autore
                </label>
                <input 
                 name="author"
                 value={formData.author}
                 type="text"
                 className="form-control"
                 placeholder="autore"
                 onChange={handleChange}
                 />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Titolo
                </label>
                <input 
                 name="title"
                 value={formData.title}
                 type="text"
                 className="form-control"
                 placeholder="titolo"
                 onChange={handleChange}
                 />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="" className="form-label">
                  Pubblico
                </label>
                <div>
                 <input 
                  type="checkbox" name="public" checked={formData.public} onChange={handleChange} className="form-check"/>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="" className="form-label">
                  Testo
                </label>
                <textarea 
                 name="body"
                 value={formData.body} 
                 id="body" 
                 className="form-control" 
                 rows="4" 
                 placeholder="Testo"
                 onChange={handleChange}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-success">Salva</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostForm

