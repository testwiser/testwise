import { Menu } from '@headlessui/react';
import { HomeIcon, UserIcon, LogoutIcon, CogIcon } from '@heroicons/react/outline';
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/components/Layout.module.css';
import React from 'react';
import { useUserContext } from '../UserProvider';
import { useSignOut } from '@nhost/nextjs'
import Link from 'next/link';
import Image from 'next/image';
import Avatar from './Avatar';

const Layout = ({ children = null }) => {
  const { user } = useUserContext();
  const { signOut } = useSignOut();

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/',
      icon: HomeIcon,
    },
    {
      label: 'Profile',
      href: '/profile',
      icon: UserIcon,
    },
    {
      label: 'Logout',
      onClick: signOut,
      icon: LogoutIcon,
    },
  ];

  return (
    <div>
      <header className={styles.header}>
        <div className={styles['header-container']}>
          <div className={styles['logo-wrapper']}>
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>

          <div className="navbar bg-base-100 flex justify-end">
            <ul className="menu menu-horizontal">
              <li><a>Link</a></li>
              <li>
                <details>
                  <summary>
                    <Avatar src={user?.avatarUrl} alt={user?.displayName} />
                    {user?.displayName}
                  </summary>
                  <Menu as="div" className={styles.menu}>

                    <div className="p-2 bg-base-100">
                      {menuItems.map(({ label, href, onClick, icon: Icon }) => (
                        <div key={label} className={styles['menu-item']}>
                          <Menu.Item>
                            {href ? (
                              <Link href={href}>
                                <a>
                                  <Icon />
                                  <span>{label}</span>
                                </a>
                              </Link>
                            ) : (
                              <button onClick={onClick}>
                                <Icon />
                                <span>{label}</span>
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </div>
                  </Menu>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </header >
      <div className={[styles['main-container'], 'flex items-stretch']}>{children}</div>

    </div>
  );
};

export default Layout;
