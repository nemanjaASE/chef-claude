import React from "react"
import chefClaudeIcon from '../../assets/ChefClaudeIcon.svg'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <img src={chefClaudeIcon} alt="Chef Claude Icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header