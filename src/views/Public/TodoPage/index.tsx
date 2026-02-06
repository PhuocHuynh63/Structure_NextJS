'use client'

import React from 'react'

const TodoClient = ({ data }: { data: any }) => {
    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {data?.map((todo: any) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoClient