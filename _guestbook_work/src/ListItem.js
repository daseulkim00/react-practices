import React from 'react';

export default function({title,contents}) {
    // console.log(contents)
    const str = contents
    console.log(str.replace("\n",'<br/>'));
    return (
        <li className="Guestbook__List__Item">
                <strong>{title}</strong>
                <p dangerouslySetInnerHTML={{__html: str.replaceAll("\n",'<br/>') }}></p>
                <strong></strong>
                <a href=''>삭제</a>
        </li>
    )
}
