"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {

  const isUserLoggedIn = false;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    })();
  }, []);


  return (
    <nav className='flex-between w-full mb-16 pt-3 '>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg" width={30} height={30} alt="logo" className='object-contain' />
      </Link>
      <p className='logo_text'>Share-Prompts</p>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {
          isUserLoggedIn ?
            (
              <div className="flex gap-3 md:gap-5">
                <Link href="/create-prompt" className='black_btn'>
                  Create Post
                </Link>
                <button type='button' onClick={signOut} className='outline_btn'>
                  Sign Out
                </button>
                <Link href="/profile" >
                  <Image src="/assets/images/logo.svg" width={37} height={37} alt="profile_image" className='rounded_full' />
                </Link>
              </div>
            )
            :
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className='black_btn'
                  >
                    Sign in
                  </button>
                ))}
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar