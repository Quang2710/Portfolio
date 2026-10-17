# vnquang · Portfolio

Trang giới thiệu cá nhân của Vũ Ngọc Quang, viết bằng Angular 21 (standalone components, signals, zoneless).

## Chạy dự án

```bash
npm install
npm start          # http://localhost:4200
npm run build      # build production vào dist/portfolio/browser
```

Yêu cầu Node `^20.19`, `^22.12` hoặc `>=24`.

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/app/data/`, không cần động vào component:

| File | Nội dung |
| --- | --- |
| `content.ts` | Thông tin cá nhân, kinh nghiệm, dự án cá nhân, kỹ năng |
| `ui.ts` | Các đoạn chữ trên giao diện (tiêu đề, nút, đoạn giới thiệu) |

Mỗi đoạn chữ có hai bản `en` và `vi`. Số năm kinh nghiệm hiển thị trên trang lấy từ `experienceYears`.

File CV để tải về là `public/vu-ngoc-quang-cv.pdf`. Khi cập nhật CV chỉ cần thay file này.

## Cấu trúc

```
src/app/
  core/       I18n (EN/VI), theme sáng/tối, view transition
  data/       nội dung và định dạng ngày tháng
  sections/   header, hero, about, experience, projects, skills, contact, footer
  shared/     directive hiệu ứng xuất hiện khi cuộn, icon
src/styles.scss   màu sắc, typography, layout dùng chung
```

## Deploy

Mỗi lần push lên nhánh `main`, trang tự build và cập nhật ở hai nơi:

- GitHub Pages: https://quang2710.github.io/Portfolio/ (workflow `.github/workflows/deploy.yml`, yêu cầu repo public và Settings → Pages → Source là **GitHub Actions**)
- Vercel: cấu hình trong `vercel.json`
