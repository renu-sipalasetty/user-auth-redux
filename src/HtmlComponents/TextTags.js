import React from 'react'

const TextTag=(props)=>{
    const {Tag,className,text}=props
    return (
        <Tag className={className} >{text}</Tag>
    )
}
export default TextTag