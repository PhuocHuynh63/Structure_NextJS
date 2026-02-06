'use client'

import { useTodo } from '@features/todo/queries/hook'
import React from 'react'

const TodoClient = () => {
    const { data, isLoading, isError } = useTodo()
    return (
        <div>
            <h1>Todo</h1>
            <ul>
                {(data as any[])?.map((todo: any) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoClient