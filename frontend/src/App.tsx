import { useEffect, useState } from 'react'
import './App.css'
import GetTop10 from './services/terms/getTop10'
import GetProfile from './services/gitProfile/getProfile'
import InsertTerm from './services/terms/insert'


function App() {

  const [terms, setTerms] = useState<Array<any>>([])
  const [profile, setProfile] = useState<any>({})
  const [input , setInput] = useState("")
  

  useEffect(() => {

    async function GetTops(){

      await GetTop10()
        .then((response) => {
          setTerms(response)
        })
    }

    GetTops()

  }, [setTerms])


  async function GetProfileFn(){

    await GetProfile(input)
      .then((response) => {
        setProfile(response)
      })
    
    await InsertTerm(input)
  }
 

  return (
    <div className="container-app">
      <div className="container">
        <p className='header-top'>API Searcher - GitHub</p>
        
        <main>
          <div className="form">
            <h1>Search Profiles on Gitgub</h1>
            <input 
            type="text" 
            name="" 
            id="input" 
            placeholder="Type a user name..."
            onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={GetProfileFn}
            >Search</button>
          </div>
          <div className="content">
            <div>
              <img src={profile.avatar_url} alt="" />
              <h1>Victor Silva</h1>
              <p>img</p>
              <p>Bio</p>
              <p>Location</p>
            </div>
          </div>
        </main>

      </div>
    </div>

  )
}

export default App
