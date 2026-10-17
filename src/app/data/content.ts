import { Company, SideProject, SkillGroup, Text } from './types';

export const profile = {
  name: { en: 'Vu Ngoc Quang', vi: 'Vũ Ngọc Quang' } satisfies Text,
  nameLines: [{ en: 'Vu Ngoc', vi: 'Vũ Ngọc' }, { en: 'Quang', vi: 'Quang' }] satisfies Text[],
  email: 'vnquang.dev@gmail.com',
  phone: '+84 345 627 105',
  phoneHref: 'tel:+84345627105',
  location: { en: 'Cau Giay, Hanoi', vi: 'Cầu Giấy, Hà Nội' } satisfies Text,
  github: 'https://github.com/Quang2710',
  githubLabel: 'github.com/Quang2710',
  cv: 'vu-ngoc-quang-cv.pdf',
  experienceYears: 5,
  education: {
    en: 'Software Engineering, Hanoi University of Civil Engineering, 2019–2024',
    vi: 'Kỹ thuật phần mềm, Trường Đại học Xây dựng Hà Nội, 2019–2024',
  } satisfies Text,
  hobbies: {
    en: 'Football, gaming, music and reading about tech.',
    vi: 'Bóng đá, chơi game, nghe nhạc và đọc các nội dung về công nghệ.',
  } satisfies Text,
};

export const experience: Company[] = [
  {
    name: 'Viettel Software',
    role: { en: 'Software Development Specialist', vi: 'Software Development Specialist' },
    from: '2026-07',
    to: null,
    stack: [],
    projects: [],
  },
  {
    name: 'FINT',
    from: '2025-09',
    to: '2026-07',
    stack: ['Angular 18', 'Nx', 'GitLab', 'Redmine', 'Figma'],
    projects: [
      {
        id: 'fint-personnel',
        name: { en: 'Personnel Management System', vi: 'Hệ thống Quản lý Nhân sự' },
        client: { en: 'Military Department', vi: 'Đơn vị quân đội' },
        role: { en: 'Frontend Developer', vi: 'Frontend Developer' },
        team: 20,
        from: '2025-09',
        to: '2026-07',
        summary: {
          en: 'One system for military staff records, organisational structure, assignments and approval workflows, built to make personnel data more accurate and daily operations faster.',
          vi: 'Hệ thống quản lý tập trung hồ sơ quân nhân, cơ cấu tổ chức, điều động và quy trình phê duyệt, giúp dữ liệu nhân sự chính xác hơn và công tác quản lý nhanh gọn hơn.',
        },
        points: [
          {
            en: 'Built core features and fixed bugs across the personnel modules: profile management, assignment updates and approval flows.',
            vi: 'Phát triển tính năng cốt lõi và sửa lỗi cho các module nhân sự: quản lý hồ sơ, cập nhật điều động và luồng phê duyệt.',
          },
          {
            en: 'Improved UI/UX and performance on screens that work with large data sets.',
            vi: 'Cải thiện UI/UX và hiệu năng cho các màn hình xử lý lượng dữ liệu lớn.',
          },
          {
            en: 'Implemented screens from Figma flows and built reusable components to keep the interface consistent.',
            vi: 'Dựng màn hình theo luồng thiết kế trên Figma, xây dựng component dùng chung để giao diện đồng nhất.',
          },
          {
            en: 'Worked with backend developers on data synchronisation, and with business analysts to refine feature specs.',
            vi: 'Phối hợp với backend để đồng bộ dữ liệu chính xác, cùng BA phân tích và hoàn thiện đặc tả tính năng.',
          },
        ],
      },
    ],
  },
  {
    name: 'Viettel Software',
    from: '2024-09',
    to: '2025-09',
    stack: ['Angular 18', 'PrimeFlex', 'Nx', 'GitLab', 'Jira', 'Figma'],
    projects: [
      {
        id: 'viettel-mo',
        name: { en: 'Mobile Operation (MO)', vi: 'Mobile Operation (MO)' },
        client: { en: 'Vietnam Airlines', vi: 'Vietnam Airlines' },
        role: { en: 'Frontend Developer', vi: 'Frontend Developer' },
        team: 80,
        from: '2024-09',
        to: '2025-09',
        summary: {
          en: 'Management and operations support system for Vietnam Airlines flight operations.',
          vi: 'Hệ thống quản lý và hỗ trợ điều hành khai thác bay của Vietnam Airlines.',
        },
        points: [
          { en: 'Developed the EDM and EFF modules.', vi: 'Phát triển module EDM và EFF.' },
          {
            en: 'Designed screens in Figma, then set up the source structure and common components the team built on.',
            vi: 'Thiết kế UI/UX trên Figma, dựng source base và các component dùng chung cho cả team.',
          },
          {
            en: 'Improved performance and responsiveness, fixed bugs and shipped new features.',
            vi: 'Tối ưu hiệu năng và khả năng responsive, sửa lỗi và phát triển tính năng mới.',
          },
          {
            en: 'Split tasks within the team, wrote daily progress reports and worked closely with backend developers and BAs.',
            vi: 'Phân chia công việc trong nhóm, báo cáo tiến độ hằng ngày, phối hợp chặt chẽ với backend và BA.',
          },
        ],
      },
    ],
  },
  {
    name: 'VNCLOUD',
    from: '2022-02',
    to: '2024-08',
    stack: ['Angular', 'Bootstrap', 'IIS', 'Git', 'Redmine'],
    projects: [
      {
        id: 'vncloud-ghs',
        name: { en: 'Gift & Hospitality System (GHS)', vi: 'Gift & Hospitality System (GHS)' },
        role: { en: 'Frontend Developer, Technical Lead', vi: 'Frontend Developer, Technical Lead' },
        team: 15,
        from: '2024-02',
        to: '2024-08',
        summary: {
          en: 'Records, tracks and approves gift and hospitality activities inside an organisation.',
          vi: 'Ghi nhận, theo dõi và phê duyệt các hoạt động quà tặng, tiếp khách trong doanh nghiệp.',
        },
        points: [
          {
            en: 'Worked through requirements with Product Owners, Project Managers and stakeholders, then analysed and designed the application.',
            vi: 'Làm việc với PO, PM và các bên liên quan để nắm yêu cầu, sau đó phân tích và thiết kế ứng dụng.',
          },
          {
            en: 'Ran code reviews to raise code quality across the team.',
            vi: 'Review code, nâng cao chất lượng code của cả team.',
          },
          {
            en: 'Evaluated team performance and gave feedback and support where people needed it.',
            vi: 'Đánh giá hiệu quả làm việc của các thành viên, góp ý và hỗ trợ để cùng tiến bộ.',
          },
          {
            en: 'Built design models and wrote functional requirement documents and user guides.',
            vi: 'Xây dựng mô hình thiết kế, viết tài liệu đặc tả chức năng và hướng dẫn sử dụng.',
          },
        ],
      },
      {
        id: 'vncloud-bts',
        name: { en: 'Business Trip System (BTS)', vi: 'Business Trip System (BTS)' },
        role: { en: 'Frontend Developer', vi: 'Frontend Developer' },
        team: 20,
        from: '2023-01',
        to: '2024-05',
        summary: {
          en: 'An internal system for managing employee business trips.',
          vi: 'Hệ thống nội bộ quản lý công tác của nhân viên.',
        },
        points: [
          {
            en: 'Owned most of the user interface and the handling of backend APIs.',
            vi: 'Phụ trách chính phần giao diện và xử lý API từ backend.',
          },
          {
            en: 'Rebuilt legacy screens and features, added automated file handling and links to other systems.',
            vi: 'Làm lại các giao diện và chức năng cũ, tích hợp xử lý file tự động và liên kết với các hệ thống khác.',
          },
          {
            en: 'Optimised the system and improved the user experience.',
            vi: 'Tối ưu hệ thống, cải thiện trải nghiệm người dùng.',
          },
          { en: 'Handled code deployment to the system.', vi: 'Phụ trách deploy code lên hệ thống.' },
        ],
      },
      {
        id: 'vncloud-mms',
        name: { en: 'Material Management System (MMS)', vi: 'Material Management System (MMS)' },
        role: { en: 'Frontend Developer', vi: 'Frontend Developer' },
        team: 12,
        from: '2022-02',
        to: '2023-01',
        summary: {
          en: 'Material management for automobile production.',
          vi: 'Hệ thống quản lý vật tư trong sản xuất ô tô.',
        },
        points: [
          {
            en: 'Developed the CKD and PIO part modules for imported accessories at TMV, from ordering through to receiving goods.',
            vi: 'Phát triển module CKD và PIO Part cho phụ kiện nhập khẩu tại TMV, từ khâu đặt hàng đến nhận hàng.',
          },
          {
            en: 'Designed new, easier-to-use screens and responsive, tablet-friendly features.',
            vi: 'Thiết kế các màn hình mới dễ dùng hơn, làm responsive và các tính năng cho tablet.',
          },
          {
            en: 'Made the interface faster across the application.',
            vi: 'Tối ưu tốc độ phản hồi của giao diện.',
          },
          {
            en: 'Wrote functional requirement documents and guides, and agreed API design and data with the backend team.',
            vi: 'Viết tài liệu đặc tả chức năng, hướng dẫn sử dụng; trao đổi với backend về giải pháp API và dữ liệu.',
          },
        ],
      },
    ],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: 'Unpacking Part System',
    url: 'https://github.com/Quang2710/UnpackingPartSystem',
    stack: ['ASP.NET Core', 'Angular'],
    description: {
      en: 'Manages the part unpacking flow: devanning, unpacking and moving parts to the PC store.',
      vi: 'Quản lý quy trình unpacking linh kiện: devanning, unpacking và chuyển part về PC store.',
    },
  },
  {
    name: 'Covid-19 Android App',
    url: 'https://github.com/Quang2710/Covid-19-Android-App',
    stack: ['Java', 'Android', 'Firebase'],
    description: {
      en: 'Tracks Covid-19 data, with user accounts and notifications.',
      vi: 'Ứng dụng theo dõi tình hình dịch Covid-19, có tài khoản người dùng và thông báo.',
    },
  },
  {
    name: 'DatingApp',
    url: 'https://github.com/Quang2710/DatingApp',
    stack: ['ASP.NET Core', 'Angular'],
    description: {
      en: 'A dating website where members sign up, see who liked them and message each other.',
      vi: 'Website hẹn hò: đăng ký thành viên, xem lượt thích và nhắn tin với nhau.',
    },
  },
];

export const skills: SkillGroup[] = [
  {
    title: { en: 'Frontend', vi: 'Frontend' },
    items: [
      { label: 'Angular', core: true },
      { label: 'TypeScript', core: true },
      { label: 'RxJS', core: true },
      { label: { en: 'State management', vi: 'Quản lý state' }, core: true },
      { label: 'Nx' },
      { label: 'HTML, CSS, JavaScript' },
      { label: 'SCSS, LESS' },
      { label: 'Bootstrap 4/5, PrimeFlex' },
      { label: { en: 'Responsive, cross-browser', vi: 'Responsive, cross-browser' } },
    ],
  },
  {
    title: { en: 'Backend & data', vi: 'Backend & dữ liệu' },
    items: [
      { label: '.NET (ASP.NET Core)' },
      { label: 'Java' },
      { label: 'SQL Server' },
      { label: 'MySQL' },
    ],
  },
  {
    title: { en: 'Tools & process', vi: 'Công cụ & quy trình' },
    items: [
      { label: 'Git, GitLab' },
      { label: 'Figma' },
      { label: 'Jira, Redmine' },
      { label: { en: 'IIS deployment', vi: 'Deploy trên IIS' } },
      { label: { en: 'Specs & user guides', vi: 'Viết đặc tả, hướng dẫn' } },
    ],
  },
];
