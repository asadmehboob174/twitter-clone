import React, { SVGProps } from 'react'
import { BiSolidHomeHeart } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { GoBookmark } from 'react-icons/go';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsBookmark, BsPeopleFill } from 'react-icons/bs';
import { LuVerified } from 'react-icons/lu';
import { CgProfile, CgMoreO } from 'react-icons/cg';
import { IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';

//React hero Icons
export const menu = [
  {
    name: 'Home',
    href: '/',
    icon: React.createElement(BiSolidHomeHeart)
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: React.createElement(GoSearch)
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: React.createElement(IoNotificationsOutline)
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: React.createElement(IoMailOutline)
  },
  {
    name: 'Lists',
    href: '/projects',
    icon: React.createElement(HiOutlineClipboardList)
  },
  {
    name: 'Bookmarks',
    href: '/bookmarks',
    icon: React.createElement(GoBookmark)
  },
  {
    name: 'Communities',
    href: '/communities',
    icon: React.createElement(BsPeopleFill)
  },
  {
    name: 'Verified',
    href: '/projects',
    icon: React.createElement(LuVerified)
  },
  {
    name: 'Profile',
    href: '/projects',
    icon: React.createElement(CgProfile)
  },
  {
    name: 'More',
    href: '',
    icon: React.createElement(CgMoreO)
  },

] as const
//React SVG Icons
export const socialIcons = [
  {
    name: 'Github',
    href: 'https://www.github.com/',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: LinkedIn
  },
  {
    name: 'Email',
    href: 'https://www.gmail.com/',
    icon: Mail
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/',
    icon: Twitter
  }
] as const

export const Introduction = [
  {
    description: `
        Hey everyone my name is Asad Mehboob, I am 32 years old and i am a Full Stack
            developer based in Lahore/Pakistan
        `,
  },
  {
    description: `
        I love building Full Stack applications with React and to share them
            on YouTube. When I discovered React, I was blown away by its
            interactivity and speed. Its virtual DOM and efficient rendering
            mechanisms allowed me to create dynamic user interfaces that
            responded to user actions in real-time.
        `,
  },
  {
    description: `
        Building applications with Reactand sharing them on YouTube is my
            ultimate combination of creative expression, technical expertise,
            and community engagement. I am thrilled to continue this journey,
            honing my skills, and inspiring others in the process.
        `,
  },

] as const

export const LightIntro = {
  title: 'Asad Mehboob',
  description: 'Hey my name is Asad mehboob and I am a full stack developer.'
} as const

interface Props {
  className?: string;
  disabled?: boolean;
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      ...props
    },
    React.createElement('path', {
      d: "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
    })
  );
}

function LinkedIn(props: SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      ...props
    },
    React.createElement('path', {
      d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"
    })
  );
}

function Mail(props: SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      viewBox: "0 0 512 512",
      fill: "currentColor",
      ...props
    },
    React.createElement('path', {
      d: "M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"
    }),
  );
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return React.createElement(
    'svg',
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      ...props
    },
    React.createElement('path', {
      d: "M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
    })
  );
}