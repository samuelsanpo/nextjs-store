import Link from 'next/link';

export const Header = () => {
    return (<nav>
        <ul>
            <Link href="/">
                <li>Home</li>
            </Link>
            <Link href="/store">
                <li>Store</li>
            </Link>
        </ul>
    </nav>)
}