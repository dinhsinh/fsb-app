// Bảng màu chủ đạo cho hệ thống quản lý học tập
export const colors = {
  // Màu chủ đạo
  primary: {
    orange: '#ff6b35',      // Cam tươi - màu nhấn chính
    white: '#ffffff',       // Trắng tinh khiết
    background: '#f9fafc',  // Xám trắng nhạt - nền chính
  },
  
  // Màu chữ
  text: {
    primary: '#1a1a1a',     // Đen đậm - chữ chính
    secondary: '#4a5568',   // Xám đậm - chữ phụ
    muted: '#718096',       // Xám nhạt - chữ mờ
  },
  
  // Màu nhấn phân loại thông tin
  accent: {
    success: '#22c55e',     // Xanh lá - trạng thái tốt/hoàn thành
    info: '#3b82f6',        // Xanh dương - liên kết/thông tin
    warning: '#ef4444',     // Đỏ - cảnh báo/khẩn cấp
  },
  
  // Màu nền và viền
  surface: {
    white: '#ffffff',       // Nền card/component
    gray: '#f1f5f9',        // Nền phụ
    border: '#e2e8f0',      // Viền nhạt
  },
  
  // Màu cho dashboard sidebar
  sidebar: {
    background: '#ff6b35',  // Cam - nền sidebar
    text: '#ffffff',        // Trắng - chữ trên sidebar
    accent: 'rgba(255, 255, 255, 0.1)', // Accent nhẹ
  }
} as const;

// Utility functions để sử dụng màu
export const getStatusColor = (status: 'success' | 'info' | 'warning') => {
  return colors.accent[status];
};

export const getTextColor = (variant: 'primary' | 'secondary' | 'muted') => {
  return colors.text[variant];
};

// CSS classes sử dụng Tailwind có sẵn
export const colorClasses = {
  // Text colors
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600', 
  textMuted: 'text-gray-500',
  textOrange: 'text-orange-500',
  textSuccess: 'text-green-500',
  textInfo: 'text-blue-500',
  textWarning: 'text-red-500',
  
  // Background colors
  bgPrimary: 'bg-orange-500',
  bgSuccess: 'bg-green-500',
  bgInfo: 'bg-blue-500',
  bgWarning: 'bg-red-500',
  bgLight: 'bg-gray-50',
  bgWhite: 'bg-white',
  
  // Button styles
  btnPrimary: 'bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors',
  btnSecondary: 'bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors',
  btnSuccess: 'bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg transition-colors',
} as const;