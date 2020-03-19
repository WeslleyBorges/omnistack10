import React, { useState, useEffect } from 'react'
import './styles.css'

export default ({ onSubmit }) => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [githubUsername, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('')

    useEffect(() => navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
    
          setLatitude(latitude)
          setLongitude(longitude)
        },
        (error) => console.log(error),
        {timeout: 30000}
      ), [])

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({ githubUsername, techs, latitude, longitude })

        setGithubUsername('')
        setTechs('')
        setLatitude('')
        setLongitude('')
    }

    return (
        <form >
          <div className="input-block">
            <label htmlFor="github_username">Username do GitHub</label>
            <input name="github_username" id="github_username" value={githubUsername} onChange={e => setGithubUsername(e.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)}></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
    )
}