import { Grid, Skeleton } from '@mui/material'
import React from 'react'

export function LoadingPage() {
  return (
    <div>LoadingPage
      <Grid columns={20} spacing={2}>
        <Skeleton
          variant='text'
          width={''}
          height={''}
          animation=''
          xs = {'7'}
          sx={{ bgcolor: 'grey.900' }}
        />
      </Grid>
    </div>
  )
}
