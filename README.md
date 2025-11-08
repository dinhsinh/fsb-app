# FSB Academic Portal

Hệ thống quản lý học tập dành cho sinh viên, giảng viên và quản trị viên của FPT University.

## Mô tả dự án

FSB Academic Portal là một ứng dụng web toàn diện được thiết kế để quản lý các hoạt động học tập tại FPT University. Hệ thống hỗ trợ 3 vai trò chính:

- **Sinh viên**: Xem điểm, lịch học, điểm danh, thông báo
- **Giảng viên**: Quản lý lớp học, nhập điểm, điểm danh sinh viên
- **Quản trị viên**: Quản lý toàn bộ hệ thống, sinh viên, giảng viên, báo cáo

## Tính năng chính

### Dành cho Sinh viên
- Dashboard tổng quan học tập
- Xem lịch học và điểm danh
- Theo dõi điểm số và GPA
- Quản lý thông báo
- Nộp đơn từ điện tử

### Dành cho Quản trị viên
- Dashboard quản lý tổng quan
- Quản lý sinh viên và giảng viên
- Quản lý lớp học và lịch học
- Quản lý điểm số và điểm danh
- Duyệt đơn từ điện tử
- Báo cáo chất lượng đào tạo

## Công nghệ sử dụng

- **Frontend**: Next.js 14, React, TypeScript
- **UI Framework**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Internationalization**: Custom i18n system (Vietnamese/English)

## Cài đặt và chạy local

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc pnpm

### Các bước cài đặt

1. Clone repository:
```bash
git clone https://github.com/dinhsinh/fsb-app.git
cd fsb-app/source
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
pnpm install
```

3. Chạy development server:
```bash
npm run dev
# hoặc
pnpm dev
```

4. Mở trình duyệt và truy cập: `http://localhost:3000`

## Deploy lên GitHub Pages

Dự án được tự động deploy lên GitHub Pages tại: `https://dinhsinh.github.io/fsb-app`

### Cách deploy thủ công:

1. Build project:
```bash
npm run build
```

2. Export static files:
```bash
npm run export
```

3. Deploy lên GitHub Pages:
```bash
npm run deploy
```

## Hướng dẫn sử dụng

### Chuyển đổi vai trò
1. Click vào avatar ở góc phải màn hình
2. Chọn vai trò mong muốn:
   - "Cổng sinh viên" - Giao diện sinh viên
   - "Cổng quản trị" - Giao diện admin
   - "Cổng giảng viên" - Giao diện giảng viên

### Chuyển đổi ngôn ngữ
- Click vào biểu tượng ngôn ngữ trên header
- Chọn Tiếng Việt hoặc English

### Điều hướng
- Sử dụng sidebar bên trái để điều hướng giữa các trang
- Sidebar có thể thu gọn bằng cách click vào nút menu

## Cấu trúc thư mục

```
source/
├── app/                    # Next.js App Router
│   ├── admin/             # Trang quản trị viên
│   ├── lecturer/          # Trang giảng viên (tương lai)
│   └── (student pages)    # Trang sinh viên
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── pages/            # Page-specific components
│   └── ui/               # shadcn/ui components
├── contexts/             # React contexts
├── lib/                  # Utilities và configurations
└── public/               # Static assets
```

## Đóng góp

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Tạo Pull Request

## License

MIT License - xem file LICENSE để biết thêm chi tiết.

## Liên hệ

- Developer: Dương Đình Sinh
- Email: sinh.duongdinh@example.com
- GitHub: [@dinhsinh](https://github.com/dinhsinh)