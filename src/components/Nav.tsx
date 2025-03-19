'use client'

import { LINKS } from '@/app/data/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
	const pathname = usePathname()
	return (
		<nav>
			<ul className='flex items-center gap-8'>
				{LINKS.map(link => (
					<Link
						key={link.name}
						href={link.path}
					>
						<li className={`${pathname === link.path ? 'text-[var(--color-accent)] border-b-3 border-[var(--color-accent)]' : ''} uppercase font-bold hover:text-[var(--color-hover)] transition duration-300 ease-in-out pb-0.5`}>{link.name}</li>
					</Link>
				))}
			</ul>
		</nav>
	)
}

export default Nav
