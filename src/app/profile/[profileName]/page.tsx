'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function ProfileName() {
  const { profileName } = useParams()

  return (
    <div>
      <h1>{profileName}</h1>
    </div>
  )
}
