import {
  SiAxios,
  SiCss3,
  SiElectron,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiKonva,
  SiLodash,
  SiMui,
  SiNextdotjs,
  SiNotion,
  SiPostman,
  SiPwa,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactivex,
  SiReactquery,
  SiReactrouter,
  SiReacttable,
  SiRedux,
  SiReduxsaga,
  SiSocketdotio,
  SiStorybook,
  SiTailwindcss,
  SiTradingview,
  SiTypescript,
  SiVite,
  SiZod,
} from 'react-icons/si';

// --------------------------------------------------
export class Skills {
  static readonly JAVASCRIPT = 'JAVASCRIPT';
  static readonly TYPESCRIPT = 'TYPESCRIPT';
  static readonly PYTHON = 'PYTHON';

  static readonly HTML = 'HTML';
  static readonly CSS = 'CSS';

  static readonly REACT_JS = 'REACT_JS';
  static readonly ELECTRON_JS = 'ELECTRON_JS';
  static readonly MATERIAL_UI = 'MATERIAL_UI';
  static readonly NEXT_JS = 'NEXT_JS';
  static readonly TAILWIND_CSS = 'TAILWIND_CSS';
  static readonly REACT_ADMIN = 'REACT_ADMIN';

  static readonly REDUX_TOOLKIT = 'REDUX_TOOLKIT';
  static readonly TANSTACK_QUERY = 'TANSTACK_QUERY';
  static readonly TANSTACK_VIRTUAL = 'TANSTACK_VIRTUAL';
  static readonly TANSTACK_TABLE = 'TANSTACK_TABLE';
  static readonly RXJS = 'RXJS';
  static readonly SOCKET_IO = 'SOCKET_IO';
  static readonly ELECTRON_UPDATER = 'ELECTRON_UPDATER';
  static readonly LIGHTWEIGHT_CHARTS = 'LIGHTWEIGHT_CHARTS';
  static readonly REDUX_SAGA = 'REDUX_SAGA';
  static readonly WEB_SOCKET = 'WEB_SOCKET';
  static readonly MATERIAL_REACT_TABLE = 'MATERIAL_REACT_TABLE';
  static readonly REACT_QUERY = 'REACT_QUERY';
  static readonly REACT_HOOK_FORM = 'REACT_HOOK_FORM';
  static readonly ZOD = 'ZOD';
  static readonly FIREBASE = 'FIREBASE';
  static readonly REACT_KONVA = 'REACT_KONVA';
  static readonly REACT_ROUTER = 'REACT_ROUTER';
  static readonly LODASH = 'LODASH';
  static readonly POSTMAN = 'POSTMAN';
  static readonly GIT = 'GIT';
  static readonly VITE = 'VITE';
  static readonly AXIOS = 'AXIOS';
  static readonly STORYBOOK = 'STORYBOOK';
  static readonly PWA = 'PWA';
  static readonly FIGMA = 'FIGMA';
  static readonly GITHUB = 'GITHUB';
  static readonly GITLAB = 'GITLAB';
  static readonly GITHUB_ACTIONS = 'GITHUB_ACTIONS';
  static readonly NOTION = 'NOTION';
  static readonly FRAMER_MOTION = 'FRAMER_MOTION';

  static readonly translate: Record<string, string> = {
    [this.JAVASCRIPT]: 'JavaScript',
    [this.TYPESCRIPT]: 'TypeScript',
    [this.PYTHON]: 'Python',
    [this.REACT_JS]: 'ReactJS',
    [this.ELECTRON_JS]: 'ElectronJS',
    [this.NEXT_JS]: 'NextJS',
    [this.TAILWIND_CSS]: 'Tailwind CSS',
    [this.MATERIAL_UI]: 'Material UI',
    [this.REACT_ADMIN]: 'React Admin',
    [this.REDUX_TOOLKIT]: 'Redux Toolkit',
    [this.TANSTACK_QUERY]: 'TanStack Query',
    [this.TANSTACK_VIRTUAL]: 'TanStack Virtual',
    [this.TANSTACK_TABLE]: 'TanStack Table',
    [this.RXJS]: 'RxJS',
    [this.SOCKET_IO]: 'Socket.io',
    [this.ELECTRON_UPDATER]: 'Electron Updater',
    [this.LIGHTWEIGHT_CHARTS]: 'Lightweight Charts',
    [this.REDUX_SAGA]: 'Redux Saga',
    [this.WEB_SOCKET]: 'WebSocket',
    [this.MATERIAL_REACT_TABLE]: 'Material React Table',
    [this.REACT_QUERY]: 'React Query',
    [this.REACT_HOOK_FORM]: 'React Hook Form',
    [this.ZOD]: 'Zod',
    [this.FIREBASE]: 'Firebase',
    [this.REACT_KONVA]: 'React Konva',
    [this.HTML]: 'HTML',
    [this.CSS]: 'CSS',
    [this.REACT_ROUTER]: 'React Router',
    [this.LODASH]: 'Lodash',
    [this.GIT]: 'Git',
    [this.POSTMAN]: 'Postman',
    [this.VITE]: 'Vite',
    [this.AXIOS]: 'Axios',
    [this.STORYBOOK]: 'Storybook',
    [this.PWA]: 'Progressive Web App',
    [this.FIGMA]: 'Figma',
    [this.GITHUB]: 'GitHub',
    [this.GITLAB]: 'GitLab',
    [this.GITHUB_ACTIONS]: 'GitHub Actions',
    [this.NOTION]: 'Notion',
    [this.FRAMER_MOTION]: 'Framer Motion',
  };
}

// --------------------------------------------------
export class SkillCategories {
  static readonly PROGRAMMING_LANGUAGES = 'PROGRAMMING_LANGUAGES';
  static readonly LIBRARIES_FRAMEWORKS = 'LIBRARIES_FRAMEWORKS';
  static readonly TOOLS = 'TOOLS';
  static readonly DATABASES = 'DATABASES';
  static readonly CLOUD_PLATFORMS = 'CLOUD_PLATFORMS';
  static readonly OTHERS = 'OTHERS';

  static readonly translate: Record<string, string> = {
    [this.PROGRAMMING_LANGUAGES]: 'Programming Languages',
    [this.LIBRARIES_FRAMEWORKS]: 'Libraries & Frameworks',
    [this.TOOLS]: 'Tools',
    [this.DATABASES]: 'Databases',
    [this.CLOUD_PLATFORMS]: 'Cloud Platforms',
    [this.OTHERS]: 'Others',
  };
}

// --------------------------------------------------
export const skillIcon: Record<string, React.ReactNode> = {
  [Skills.JAVASCRIPT]: <SiJavascript className="text-[#F7DF1E]" />,
  [Skills.TYPESCRIPT]: <SiTypescript className="text-[#3178C6]" />,
  [Skills.PYTHON]: <SiPython className="text-[#3776AB]" />,
  [Skills.REACT_JS]: <SiReact className="text-[#61DAFB]" />,
  [Skills.ELECTRON_JS]: <SiElectron className="text-[#47848F]" />,
  [Skills.NEXT_JS]: <SiNextdotjs className="text-foreground" />,
  [Skills.TAILWIND_CSS]: <SiTailwindcss className="text-[#06B6D4]" />,
  [Skills.MATERIAL_UI]: <SiMui className="text-[#007FFF]" />,
  [Skills.REACT_ADMIN]: <></>,
  [Skills.REDUX_TOOLKIT]: <SiRedux className="text-[#764ABC]" />,
  [Skills.TANSTACK_QUERY]: <SiReactquery className="text-[#FF4154]" />,
  [Skills.TANSTACK_VIRTUAL]: <></>,
  [Skills.TANSTACK_TABLE]: <SiReacttable className="text-[#FF4154]" />,
  [Skills.RXJS]: <SiReactivex className="text-[#B7178C]" />,
  [Skills.SOCKET_IO]: <SiSocketdotio className="text-[#010101] dark:text-[#FFFFFF]" />,
  [Skills.ELECTRON_UPDATER]: <></>,
  [Skills.LIGHTWEIGHT_CHARTS]: <SiTradingview className="text-[#131622] dark:text-[#FFFFFF]" />,
  [Skills.REDUX_SAGA]: <SiReduxsaga className="text-[#999999] dark:text-[#FFFFFF]" />,
  [Skills.WEB_SOCKET]: <></>,
  [Skills.MATERIAL_REACT_TABLE]: <></>,
  [Skills.REACT_QUERY]: <SiReactquery className="text-[#FF4154]" />,
  [Skills.REACT_HOOK_FORM]: <SiReacthookform className="text-[#EC5990]" />,
  [Skills.ZOD]: <SiZod className="text-[#408AFF]" />,
  [Skills.FIREBASE]: <SiFirebase className="text-[#DD2C00]" />,
  [Skills.REACT_KONVA]: <SiKonva className="text-[#0D83CD]" />,
  [Skills.HTML]: <SiHtml5 className="text-[#E34F26]" />,
  [Skills.CSS]: <SiCss3 className="text-[#1572B6]" />,
  [Skills.REACT_ROUTER]: <SiReactrouter className="text-[#CA4245]" />,
  [Skills.LODASH]: <SiLodash className="text-[#3492FF]" />,
  [Skills.POSTMAN]: <SiPostman className="text-[#FF6C37]" />,
  [Skills.GIT]: <SiGit className="text-[#F05032]" />,
  [Skills.VITE]: <SiVite className="text-[#646CFF]" />,
  [Skills.AXIOS]: <SiAxios className="text-[#5A29E4]" />,
  [Skills.STORYBOOK]: <SiStorybook className="text-[#FF4785]" />,
  [Skills.PWA]: <SiPwa className="text-[#5A0FC8]" />,
  [Skills.FIGMA]: <SiFigma className="text-[#F24E1E]" />,
  [Skills.GITHUB]: <SiGithub className="text-[#181717] dark:text-[#FFFFFF]" />,
  [Skills.GITLAB]: <SiGitlab className="text-[#FC6D26]" />,
  [Skills.GITHUB_ACTIONS]: <SiGithubactions className="text-[#2088FF]" />,
  [Skills.NOTION]: <SiNotion className="text-[#000000] dark:text-[#FFFFFF]" />,
  [Skills.FRAMER_MOTION]: <></>,
};

// --------------------------------------------------
export const mySkills: {
  id: string;
  title: string;
  skills: string[];
}[] = [
  {
    id: SkillCategories.PROGRAMMING_LANGUAGES,
    title: SkillCategories.translate[SkillCategories.PROGRAMMING_LANGUAGES],
    skills: [Skills.JAVASCRIPT, Skills.TYPESCRIPT, Skills.PYTHON],
  },
  {
    id: SkillCategories.LIBRARIES_FRAMEWORKS,
    title: SkillCategories.translate[SkillCategories.LIBRARIES_FRAMEWORKS],
    skills: [
      Skills.REACT_JS,
      Skills.NEXT_JS,
      Skills.ELECTRON_JS,
      Skills.REACT_ADMIN,
      Skills.REACT_KONVA,
      Skills.REACT_ROUTER,
      Skills.TAILWIND_CSS,
      Skills.MATERIAL_UI,
      Skills.MATERIAL_REACT_TABLE,
      Skills.TANSTACK_QUERY,
      Skills.TANSTACK_VIRTUAL,
      Skills.TANSTACK_TABLE,
      Skills.REDUX_TOOLKIT,
      Skills.REDUX_SAGA,
      Skills.RXJS,
      Skills.SOCKET_IO,
      Skills.WEB_SOCKET,
      Skills.REACT_HOOK_FORM,
      Skills.ZOD,
      Skills.AXIOS,
      Skills.LODASH,
      Skills.LIGHTWEIGHT_CHARTS,
      Skills.PWA,
      Skills.FRAMER_MOTION,
    ],
  },
  {
    id: SkillCategories.TOOLS,
    title: SkillCategories.translate[SkillCategories.TOOLS],
    skills: [
      Skills.GIT,
      Skills.GITHUB,
      Skills.GITHUB_ACTIONS,
      Skills.GITLAB,
      Skills.VITE,
      Skills.STORYBOOK,
      Skills.POSTMAN,
    ],
  },
  {
    id: SkillCategories.OTHERS,
    title: SkillCategories.translate[SkillCategories.OTHERS],
    skills: [Skills.HTML, Skills.CSS, Skills.FIGMA, Skills.NOTION],
  },
];
