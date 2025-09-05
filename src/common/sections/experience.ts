import { TExperience } from '../types';
import { Skills } from './skills';

// --------------------------------------------------
export const workExperienceData: TExperience[] = [
  {
    id: 'freelance',
    company: {
      name: 'Freelance',
      isCurrentEmployer: true,
    },
    positions: [
      {
        id: 'freelance_minimal_technology',
        title: 'Front End Developer',
        periodFrom: 'Sep 2025',
        type: 'Contract',
        descriptions: [
          `Supported ERP systems through ongoing maintenance, bug fixing, and UI/UX improvements, helping clients keep their applications stable and user-friendly.`,
        ],
        skills: [
          Skills.TYPESCRIPT,
          Skills.REACT_JS,
          Skills.MATERIAL_UI,
          Skills.MATERIAL_REACT_TABLE,
          Skills.REACT_ADMIN,
          Skills.TANSTACK_QUERY,
          Skills.TANSTACK_VIRTUAL,
          Skills.REDUX_TOOLKIT,
          Skills.REACT_HOOK_FORM,
          Skills.ZOD,
        ],
      },
    ],
  },
  {
    id: 'minimal_technology',
    company: {
      name: 'Minimal Technology',
      url: 'https://minimaltek.com',
      logo: `/experiences/minimal_technology.png`,
      location: 'Ho Chi Minh City, Vietnam',
      periodFrom: 'Nov 2022',
      periodTo: 'Aug 2025',
    },
    positions: [
      {
        isExpanded: true,
        id: 'fe_minimal_technology',
        title: 'Front End Developer',
        periodFrom: 'Nov 2022',
        periodTo: 'Aug 2025',
        type: 'Full-time',
        descriptions: [
          `Developed and maintained ERP and Trading systems, delivering scalable, high performance applications with real-time data.`,
          `Built custom internal tools to improve efficiency and maintainability.`,
          `Focused on scalable, high-performance, and easy to maintain.`,
          `Collaborated with cross-functional teams to deliver high-impact features on tight deadlines.`,
        ],
        skills: [
          Skills.TYPESCRIPT,
          Skills.REACT_JS,
          Skills.MATERIAL_UI,
          Skills.MATERIAL_REACT_TABLE,
          Skills.REACT_ADMIN,
          Skills.TANSTACK_QUERY,
          Skills.TANSTACK_VIRTUAL,
          Skills.REDUX_TOOLKIT,
          Skills.REDUX_SAGA,
          Skills.REACT_HOOK_FORM,
          Skills.ZOD,
          Skills.FIREBASE,
          Skills.REACT_KONVA,
          Skills.ELECTRON_JS,
          Skills.ELECTRON_UPDATER,
          Skills.RXJS,
          Skills.SOCKET_IO,
          Skills.WEB_SOCKET,
          Skills.LIGHTWEIGHT_CHARTS,
        ],
      },
    ],
  },
];
