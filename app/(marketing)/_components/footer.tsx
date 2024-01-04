import { Button } from '@/components/ui/button'
import Logo from './logo'

const Footer = () => {
  return (
    <div
      className="flex dark:bg-[#121214] items-center w-full p-6 
    bg-background"
    >
      <Logo />
      <div
        className="md:ml-auto w-full justify-between md:justify-end flex 
      items-center gap-x-2 text-muted-foreground"
      >
        <Button variant="ghost" size="sm">
          Privacy Police
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  )
}

export default Footer
