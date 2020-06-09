import Link from 'next/link'

export const Route = () => {
    return(
        <div >
            <Link className="links" href="/About"><a>About</a></Link>
            <style jsx>{`
                .links {
                color: pink;
                }
            
      `}</style>
        </div>
    )
}
