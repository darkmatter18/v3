import clsx from 'clsx';
import React from 'react';
import Link from 'next/link'

import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import IconNav from '../../icons/IconNav';
import IconLogo from '../../icons/IconLogo';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import NavLink from '../utils/navLink';

const Nav = () => {
    //   const isHome = location_pathname === '/';
    const isHome = true;
    const initialNavState = false;

    const [isOpen, setIsOpen] = React.useState(initialNavState);
    const [isMounted, setIsMounted] = React.useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    React.useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Logo = (
        <div className="logo" tabIndex={-1}>
            {isHome ? (
                <a href="/" aria-label="home">
                    <IconLogo />
                </a>
            ) : (
                <Link href="/" aria-label="home">
                    <IconLogo />
                </Link>
            )}
        </div>
    );

    const resumeLink = (
        <a
            className="transition ease-in-out delay-150 hover:-translate-y-1
      hover:scale-110 hover:bg-gray-200 duration-300
      px-4 py-2 mt-2 md:mt-0 md:ml-4 text-sm font-semibold
      rounded-lg focus:bg-gray-200
      text-neon-violet focus:text-neon-violet hover:text-neon-violet
      border-2 hover:border-neon-violet
      focus:outline-none focus:shadow-outline"
            href="/resume.pdf"
            target="_blank"
        >
            Resume
        </a>
    );

    return (
        <div className="w-full text-neon-violet z-20 fixed">
            <div
                className="flex justify-between max-w-screen-xl
        mx-auto pt-4 md:items-center md:justify-between md:flex-row">
                <div className={clsx('pl-5 flex-grow float-left flex',
                    isOpen ? '' : 'items-start')}>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={'fade'} timeout={loaderDelay}>
                                <div className={'transition duration-500 hover:scale-125'}>
                                    {Logo}
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </div>
                <nav
                    className={
                        clsx('flex-col flex-grow md:flex md:justify-end md:flex-row',
                            isOpen ? 'shadow-2xl' : '',
                            'shadow-deep-blue-dark md:shadow-none',
                            'min-h-screen md:min-h-fit opacity-95 rounded-tl-lg',
                            isOpen ? 'bg-deep-blue-dark' : '', 'md:bg-inherit')
                    }>
                    <TransitionGroup component={null}>
                        {isMounted && (
                            <CSSTransition classNames={'fadeup'} timeout={loaderDelay}>
                                <div className="p-4 flex flex-row items-center justify-end">
                                    <button
                                        className="md:hidden rounded-lg focus:outline-none
                        focus:shadow-outline"
                                        onClick={() => setIsOpen((open) => !open)}
                                    >
                                        <IconNav open={isOpen} />
                                    </button>
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                    {/* NAV Links */}
                    {prefersReducedMotion ? (
                        <>
                            {nav.map((item, i) => {
                                return (
                                    <NavLink
                                        key={i}
                                        url={item.link}
                                        index={i + 1}
                                        name={item.name}
                                    />
                                );
                            })}
                            {resumeLink}
                        </>
                    ) : (
                        <>
                            <TransitionGroup component={null}>
                                {isMounted &&
                                    nav.map((item, i) => (
                                        <CSSTransition
                                            key={i}
                                            classNames="fadedown"
                                            timeout={loaderDelay}
                                        >
                                            <div
                                                style={{ transitionDelay: `${i + 1}00ms` }}
                                                className={clsx(isOpen ? 'flex' : 'hidden',
                                                    'justify-center')}
                                            >
                                                <NavLink
                                                    url={item.link}
                                                    index={i + 1}
                                                    name={item.name}
                                                />
                                            </div>
                                        </CSSTransition>
                                    ))}
                            </TransitionGroup>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={'fadedown'} timeout={loaderDelay}>
                                        <div style={{ transitionDelay: `${nav.length * 100}ms` }}
                                            className={clsx(isOpen ? 'flex' : 'hidden',
                                                'justify-center')}>
                                            {resumeLink}
                                        </div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
};

Nav.propTypes = {
    location: PropTypes.object.isRequired,
    initialNavState: PropTypes.bool.isRequired,
};

export default Nav;