import React, {MouseEventHandler} from 'react'
import down from './downIcon.png'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort) {
        return up
    }
    if (up) {
        return down
    } return sort
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log('down', down)
        console.log('sort', sort)
        console.log('up', up)
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            сделать иконку
            <img
                id={id + '-icon-' + sort}
                src={downIcon}
                style={{width: 10, height: 10, marginTop: 10, marginBottom: 0}}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
