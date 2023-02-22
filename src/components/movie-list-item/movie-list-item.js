import './movie-list-item.css'

const MovieListItem = ({name, viewers, favourite}) => {
    // let classNames='list-group-item d-flex justify-content-between'
    // if (favourite) {
    //     classNames += ' favourite'
    // }
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
        <span className='list-group-item-label'>
            {name}
        </span>
        <input className='list-group-item-input' type='number' defaultValue = {viewers} />
        <div className='d-flex justify-content-center align-items-center'>
            <button className='btn-cookie btn-sm' type='button' >
                <i className='fas fa-cookie'></i>
            </button>
            <button className='btn-trash btn-sm' type='button' >
                <i className='fas fa-trash'></i>
            </button>
            <i className='fas fa-star'></i>
        </div>
    </li>
  )
}

export default MovieListItem