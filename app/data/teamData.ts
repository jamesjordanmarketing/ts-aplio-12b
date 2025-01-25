interface TeamMember {
  id: number
  name: string
  designation: string
  fbLink: string
  dribbleInLink: string
  gitHubLink: string
  linkedInLink: string
  image: string
  details: string
  email: string
  phone: string
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Cody Fisher',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Kristin Coper',
    designation: 'Project Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export type { TeamMember }
