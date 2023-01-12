import React from 'react'

const WidgetTags = () => {

  const tags = ['c','c++','express','firebase','html','javascript','java','DevOps','react'];

  return (
    <div className='widget-tags'>
      <h4>Widget tags</h4>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags
