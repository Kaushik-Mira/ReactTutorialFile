import React from 'react'

const ReactProps = ({obj, cname, props}) => {
  //  let {obj, cname} = props;
  return (
    <div>
      <h2>Hello {obj.name}</h2>
      <p>{cname}</p>
    </div>
  )
}

export default ReactProps;
