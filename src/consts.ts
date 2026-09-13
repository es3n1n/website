export const SITE_TITLE = 'es3n1n'
export const SITE_DESCRIPTION =
  'reverse engineering, security research, and random programming stuff'
export const AUTHOR = 'Arsenii es3n1n'

export type Contact = { label: string; text: string } & (
  { href: string } | { copy: string }
)

export const CONTACTS: Contact[] = [
  {
    label: 'github',
    text: 'github.com/es3n1n',
    href: 'https://github.com/es3n1n',
  },
  {
    label: 'twitter',
    text: 'twitter.com/es3n1n',
    href: 'https://twitter.com/es3n1n',
  },
  {
    label: 'bandcamp',
    text: 'bandcamp.com/es3n1n',
    href: 'https://bandcamp.com/es3n1n',
  },
  { label: 'discord', text: 'not_es3n1n', copy: 'not_es3n1n' },
  {
    label: 'mail',
    text: 'contact@es3n1n.eu',
    href: 'mailto:contact@es3n1n.eu',
  },
]
