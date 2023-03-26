import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-scroll'

const navigation = [
  { name: '', href: '', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  
                </div>
                <h2 className='text-3xl text-neutral-200 font-serif'>StudyTi.me</h2>
                <div className="hidden sm:ml-6 sm:block">
               
                  <div className="flex space-x-4">
                    {navigation.map((item) => (

                  <Link
                      key={item.name}
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}</Link>
                     

                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAM1BMVEXk5ueutLecnZ7p7O29wsTn6eqrsbS5vsHFycvQ09XT1tjJzc/b3t+0ubzg4+TBxshtbm4gM8rIAAADK0lEQVRoge3a3XKkIBAFYMkIKgrs+z/tqjNbifx5DoGZ2ir6JpefrcA03Rn+fH0uhq/H52LHh89Fxzve8Y53vOMd73jHO/42XB7xAXw3rV7WdV30NhQ/QREupXZG/QsxrkMZX4BLO+/iz1Bq2kp4GpfWiSv99Et4Fpc6Rh+6WJvjc5x+Jt8Wl1PaPpK33KuncGly9hHch6fwbN4FOoFLd28rQ9gELpd7e9dHInUctwB96BrXYfwBfPCn3gDXoC3UDOsoLg1o72Fr4xua+J76iqYO4tLhiQt4u4E4uNRfqeuquISX24k78L2D+MhkDr93DLfEWj9iq4pzNvrRMZzYaCcOnjMYTq03fMVBuFw5XEw18UzlFg2DnR4dz+Of/OYDVEF9B1pL/Qf7fKNsoZaa+EfPdvJXTWA2inMrDq3d0UqGKiYWzIYLyInADVq+ogUk8bsGV1F43U68dXCtEzi+5PCrInxdgq8sCr6wELdUDdrwfYW6n2O/q6bJ/RzqisAnK40PwEsnWgNsK6yuTeI20X4ss9kmoM18d0V24Qoav8lyTo1k/7Gk67xF25BKgNXLr/BheGjj9dtPuqDhXjZp2OZJvR5g/2ucLpt0FM9YrF7dOI5uXphjpQYu/XgPfkKbXuc97emMPfn1HDHxj8D126Vd5kk8Z0o/ltsRZpy1JX3iV81qJ5S/zq/PIJxmplxoDWeXI+Mk/P0AYtLwYYPgctBj/lD3Nr3bsPzvcTksE5DzNf8Jev23uFxupzpR3wDH7Q2enOEhvL5LLIsnfkRg/m7EmcXZbkigi/ytLY3LDZ2qZJPP7bskvt/Ofm/flDcpnG5Apfn0sk/gyPQQ1pPtoQQ+1rMzd+YoLqva6dxjeM13/tLjt8cITnZ/MD16nQhxSbYbQT2240KcbfiBEZs4BXj9D/6M2KIL8CYv/dTDEtvHmWkxiYdNeB8n50iUHkzbPPzRLHERmT94eLMvfkTQJLvirZb6C/fPOQ9vSItwr1/xpm893G0XvF4FkcC9uuKaOTnNoMPl8JYb7QjvP+YuuBWqbZgcPjYOZ9N42O6oHZnM3x0d73jHO94y/gJG9CrgM7pBbAAAAABJRU5ErkJggg=="
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Profile Settings
                          </a>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}