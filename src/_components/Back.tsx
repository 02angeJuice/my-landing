'use client'
import { usePathname, useRouter } from 'next/navigation'

const Back = () => {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname !== '/') {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* <a href="/">{`<--Back`}</a> */}

        <button className="hover:cursor-pointer" onClick={() => router.back()}>
          Back
        </button>
      </div>
    )
  }
}

export default Back
