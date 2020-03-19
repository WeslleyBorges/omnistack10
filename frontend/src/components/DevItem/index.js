import React, { useState } from 'react'
import './styles.css'

export default props => {
    const dev = props.dev

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatarUrl} alt=""/>
                <div className="user-info">
                  <strong>{ dev.name }</strong>
                  <span>{ dev.techs }</span>
                </div>
            </header>
            <p>{ dev.bio || 'E a falta de bio nessa porra?' }</p>
            <a href={`https://github.com/${dev.githubUsername}`}>Acessar perfil no GitHub</a>
        </li>
    )
}