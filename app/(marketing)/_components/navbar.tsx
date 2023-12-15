'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Logo from './logo'

const NavBar = () => {
  const scrolled = useScrollTop()

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#121214] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm ',
      )}
    >
      <Logo />

      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-">
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavBar
