import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <Button variant={'default'}>Get Started</Button>
    </div>
  )
}

export default page
