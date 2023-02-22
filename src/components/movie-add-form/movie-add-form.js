
import './movie-add-form.css'
const MovieAddForm = () => {
  return (
    <div className="movie-add-form">
        <h3>Yangi kino qushish</h3>
        <form className='add-form d-flex'>
            <input className='form-control new-post-label' type='text' placeholder='Qanday kino?' />
            <input type='number' className='form-control new-post-label' placeholder='"Nechi marotaba kurilgan?' />
            <button type='submit' className='btn btn-outline-dark'>Qushish</button>
        </form>
    </div>
  )
}

export default MovieAddForm