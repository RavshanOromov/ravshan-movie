import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import MovieList from "../movie-list/movie-list"
import MovieAddForm from "../movie-add-form/movie-add-form"
import './app.css'

const App = () => {
  const data = [
    {name: 'Empire of Usman', viewers: 988, favourite: false },
    {name: 'Ertugli', viewers: 654, favourite: false },
    {name: 'Usman', viewers: 877, favourite: true }
  ]

 return (
 <div className="app font-monospace">
    <div className="content">
        <AppInfo />
        <div className="search-panel">
            <SearchPanel />
            <AppFilter />
        </div>
        <MovieList data={data} />
        <MovieAddForm />
    </div>
 </div> 
 )  
}

export default App