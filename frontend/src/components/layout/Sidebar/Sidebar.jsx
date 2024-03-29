import React from 'react'
import { Contries, Prices } from './sections'
import { Box, TextField } from '@material-ui/core'
import { SidebarContainer } from './style/SidebarStyled'
import { useSidebarValues } from '../../../context/SidebarContext'

export const Sidebar = ({ updateSearch }) => {
  const { contries, prices } = useSidebarValues()

  return (
    <SidebarContainer>
      <Box height="42.4px" />
      <TextField
        variant="outlined"
        label="Search"
        placeholder="search"
        size="small"
        fullWidth
        onChange={(e) => updateSearch(e.target.value)}
      />
      <Contries list={contries} />
      <Prices list={prices} />
    </SidebarContainer>
  )
}
