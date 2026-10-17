import { Text } from './types';

const EN_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export const ui = {
  skip: { en: 'Skip to content', vi: 'Bỏ qua điều hướng' },

  nav: {
    about: { en: 'About', vi: 'Giới thiệu' },
    experience: { en: 'Experience', vi: 'Kinh nghiệm' },
    projects: { en: 'Projects', vi: 'Dự án' },
    skills: { en: 'Skills', vi: 'Kỹ năng' },
    contact: { en: 'Contact', vi: 'Liên hệ' },
  },

  header: {
    nav: { en: 'Main', vi: 'Điều hướng chính' },
    language: { en: 'Language', vi: 'Ngôn ngữ' },
    toDark: { en: 'Switch to dark theme', vi: 'Chuyển sang giao diện tối' },
    toLight: { en: 'Switch to light theme', vi: 'Chuyển sang giao diện sáng' },
    openMenu: { en: 'Open menu', vi: 'Mở menu' },
    closeMenu: { en: 'Close menu', vi: 'Đóng menu' },
  },

  hero: {
    eyebrow: { en: 'Frontend developer in Hanoi', vi: 'Frontend developer tại Hà Nội' },
    lede: {
      en: 'I build Angular front ends for the internal systems behind airlines, car plants and large organisations.',
      vi: 'Tôi phát triển giao diện Angular cho hệ thống nội bộ của các hãng hàng không, nhà máy ô tô và những tổ chức lớn.',
    },
    contact: { en: 'Get in touch', vi: 'Liên hệ với tôi' },
    cv: { en: 'Download CV', vi: 'Tải CV' },
    now: { en: 'Now', vi: 'Hiện tại' },
    experience: { en: 'Experience', vi: 'Kinh nghiệm' },
    basedIn: { en: 'Based in', vi: 'Sống tại' },
  },

  years: (n: number): Text => ({ en: `${n}+ years`, vi: `${n}+ năm` }),

  about: {
    lead: (years: number): Text => ({
      en: `For the past ${EN_NUMBERS[years] ?? years} years I’ve worked on the frontend of enterprise software. The domain keeps changing (automotive parts, business travel, airline operations, military personnel records) but the job stays the same: take a complicated process and turn it into screens people can work in all day without fighting the tool.`,
      vi: `${years} năm qua, tôi làm frontend cho các phần mềm doanh nghiệp. Lĩnh vực luôn thay đổi, từ linh kiện ô tô, quản lý công tác, khai thác hàng không đến hồ sơ nhân sự quân đội, nhưng công việc cốt lõi thì vẫn vậy: biến một quy trình phức tạp thành những màn hình mà người dùng có thể làm việc cả ngày mà không thấy vướng víu.`,
    }),
    body: {
      en: 'Most of that time has been in Angular, with RxJS, Nx and whichever UI kit the project uses. Beyond code, I design screens in Figma and write functional specs and user guides. On the GHS project I was also the technical lead, running code reviews, working through requirements with product owners and supporting the people on my team.',
      vi: 'Phần lớn thời gian đó tôi làm việc với Angular, RxJS, Nx và UI kit tùy theo từng dự án. Ngoài code, tôi thiết kế màn hình trên Figma, viết tài liệu đặc tả chức năng và hướng dẫn sử dụng. Ở dự án GHS, tôi kiêm vai trò technical lead: review code, làm rõ yêu cầu cùng PO và hỗ trợ các thành viên trong team.',
    },
    education: { en: 'Education', vi: 'Học vấn' },
    offTheClock: { en: 'Off the clock', vi: 'Ngoài giờ làm' },
  },

  experience: {
    stack: { en: 'Tech stack', vi: 'Công nghệ' },
    team: (n: number): Text => ({ en: `Team of ${n}`, vi: `Nhóm ${n} người` }),
    present: { en: 'Present', vi: 'Hiện tại' },
  },

  projects: {
    intro: {
      en: 'Side projects built outside of work. The source code is on GitHub.',
      vi: 'Các dự án cá nhân tôi làm ngoài giờ. Mã nguồn có trên GitHub.',
    },
    more: { en: 'More on GitHub', vi: 'Xem thêm trên GitHub' },
    newTab: { en: 'opens in a new tab', vi: 'mở trong tab mới' },
  },

  contact: {
    lead: {
      en: 'Have a role or a project in mind?',
      vi: 'Bạn có vị trí tuyển dụng hay dự án muốn trao đổi?',
    },
    sub: {
      en: 'Email is the best way to reach me. Phone works too.',
      vi: 'Cách tốt nhất để liên lạc với tôi là qua email, hoặc bạn có thể gọi điện trực tiếp.',
    },
    copy: { en: 'Copy', vi: 'Sao chép' },
    copied: { en: 'Copied', vi: 'Đã chép' },
    copyLabel: { en: 'Copy email address', vi: 'Sao chép địa chỉ email' },
    phone: { en: 'Phone', vi: 'Điện thoại' },
    location: { en: 'Location', vi: 'Địa chỉ' },
    cv: { en: 'CV', vi: 'CV' },
    cvLink: { en: 'Download PDF', vi: 'Tải bản PDF' },
  },

  footer: {
    city: { en: 'Hanoi', vi: 'Hà Nội' },
    builtWith: { en: 'Built with Angular', vi: 'Làm bằng Angular' },
    top: { en: 'Back to top', vi: 'Lên đầu trang' },
  },
};
