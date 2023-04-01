import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {  LinearProgress, Skeleton } from '@mui/material';


export default function ProgressAndSkeleton() {
  return (
    <>
    <h1>Progress bar</h1>
    <CircularProgress/>
    <CircularProgress color='secondary'/>
    <LinearProgress/>


    <h1>Skeleton</h1>
    <Skeleton varinant = "text" />
    <h2>curcular skeleton</h2>
    <Skeleton varinant = "circular" width={40} height={100} />
    <h2>rectangular skeleton</h2>
    <Skeleton varinant = "rectangular" width={100} height={100} />

    </>
  )
}
