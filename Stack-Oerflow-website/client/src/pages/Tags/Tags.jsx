import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [
        {
            id: 1,
            tagName: "javascript",
            tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
        },{
            id: 2,
            tagName: "python",
            tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
        },{
            id: 3,
            tagName: "c#",
            tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
        },{
            id: 4,
            tagName: "java",
            tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
        },{
            id: 5,
            tagName: "php",
            tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
        }
    ]

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-3'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is keyword or label that categorizes your question with other, similar questions </p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your answer</p>
            <div className='tags-list-container'>
                {
                    tagsList.map( (tag) => (
                        <TagsList tag = {tag} key = {tagsList.id}/>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default Tags
