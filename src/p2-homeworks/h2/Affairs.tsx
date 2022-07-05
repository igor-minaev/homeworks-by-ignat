import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')
    } // need to fix
    const setHigh = () => {props.setFilter('high')
    }
    const setMiddle = () => {props.setFilter('middle')
    }
    const setLow = () => {props.setFilter('low')
    }

    return (
        <div className={s.wrapper}>

            {mappedAffairs}

            <button className={`${s.button} ${s.filter}`} onClick={setAll}>All</button>
            <button className={`${s.button} ${s.filter}`} onClick={setHigh}>High</button>
            <button className={`${s.button} ${s.filter}`} onClick={setMiddle}>Middle</button>
            <button className={`${s.button} ${s.filter}`} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
