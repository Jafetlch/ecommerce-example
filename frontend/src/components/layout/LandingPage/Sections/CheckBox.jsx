import React, { useState } from 'react'
import { Checkbox, Collapse } from 'antd'

const { Panel } = Collapse

export const CheckBox = ({ list, handleFilters }) => {
  const [checked, setChecked] = useState([])

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    handleFilters(newChecked)
  }

  const renderCheckboxLists =
    list &&
    list.map(value => (
      <div key={value._id}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={checked.indexOf(value._id) === -1 ? false : true}
        />

        <span style={{ marginLeft: '20px' }}>{value.name}</span>
        <br />
      </div>
    ))

  return (
    <Collapse defaultActiveKey={['0']}>
      <Panel header="Container" key="1">
        {renderCheckboxLists}
      </Panel>
    </Collapse>
  )
}
