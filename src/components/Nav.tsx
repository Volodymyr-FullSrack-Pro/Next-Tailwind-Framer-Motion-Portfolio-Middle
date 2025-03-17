'use client'

import { LINKS } from '@/app/data/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<nav>
			<ul className='flex items-center gap-8'>
				{LINKS.map(link => (
					<Link
						key={link.name}
						href={link.path}
						className={pathname === link.path ? 'text-red-500' : ''}
					>
						<li className='uppercase'>{link.name}</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default Nav
