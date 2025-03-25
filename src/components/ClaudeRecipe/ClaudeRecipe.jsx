import React from "react"
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = ({ recipe, ref }) => {
    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article ref={ref} className="suggested-recipe-container" aria-live="polite">
               <ReactMarkdown>{ recipe }</ReactMarkdown>
            </article>
        </section>
    )
}

export default ClaudeRecipe