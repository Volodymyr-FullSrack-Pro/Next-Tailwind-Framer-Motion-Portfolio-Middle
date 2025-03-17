import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
	return (
		<header className='py-8 xl:py-12'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						VovaDev_Pro<span className='text-[var(--color-accent)]'>.</span>
					</h1>
				</Link>
				<div className='hidden xl:flex items-center gap-4'>
					<Nav />
					<Link href='/contact'>
						<Button>Hire me</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
