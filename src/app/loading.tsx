import Logo from "../components/logo"

const Loading = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-background'>
      <div className='flex flex-col items-center gap-8'>
        <div className='animate-pulse'>
          <Logo variant='terminal' size={100} />
        </div>

        <div className='h-1 w-48 overflow-hidden rounded-full bg-border'>
          <div className='animate-loading-bar h-full bg-gradient-to-r from-blue-600 to-blue-400'></div>
        </div>

        <p className='text-sm font-light text-muted-foreground'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading
