import Link from 'next/link';
import Header from '../components/header';

export default function IndexPage() {
  return (
    <>
      <Header />
      <div>
        Hello World.{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </>
  )
}
