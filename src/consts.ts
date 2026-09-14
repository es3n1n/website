export const SITE_TITLE = 'es3n1n'
export const SITE_DESCRIPTION =
  'reverse engineering, security research, and random programming stuff'
export const AUTHOR = 'Arsenii es3n1n'

export type Contact = { label: string; text: string } & (
  { href: string } | { copy: string }
)

export type Banner = { href: string; img: string }

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

export const PEOPLE: Banner[] = [
  {
    href: 'https://mixy.one',
    img: 'https://cdn.es3n1n.io/web-assets/mixy1.gif',
  },
  {
    href: 'https://nullablevo.id.au/',
    img: 'https://nullablevo.id.au/images/button.png',
  },
  {
    href: 'https://zelda.li/',
    img: 'https://zelda.li/banner_v2.gif',
  },
  {
    href: 'https://z1x.us/',
    img: 'https://z1x.us/buttons/z1xus.gif',
  },
  {
    href: 'https://0xnubb.com/',
    img: 'https://0xnubb.com/buttons/nubb.gif',
  },
  {
    href: 'https://tei.pet/',
    img: 'https://tei.pet/88x31/teidesu.png',
  },
]

export const BANNERS: Banner[] = [
  {
    href: 'https://es3n1n.eu/',
    img: 'https://cdn.es3n1n.io/web-assets/88x31.png',
  },
  {
    href: 'https://es3n1n.eu/',
    img: 'https://cdn.es3n1n.io/web-assets/88x31-alt.png',
  },
  {
    href: 'https://www.slsknet.org/',
    img: 'https://88x31.nl/gifs/soulseek.gif',
  },
]
