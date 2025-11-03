export type Language = 'vi' | 'en';

export const translations = {
  vi: {
    // Navigation
    dashboard: 'Bảng điều khiển',
    schedule: 'Lịch học',
    marks: 'Điểm số',
    attendance: 'Điểm danh',
    finance: 'Tài chính',
    notifications: 'Thông báo',
    profile: 'Hồ sơ',
    settings: 'Cài đặt',
    seminar: 'Hội thảo',
    // Dashboard
    welcomeBack: 'Chào mừng trở lại',
    academicOverview: 'Tổng quan học tập học kỳ này',
    upcomingClasses: 'Lớp sắp tới',
    recentActivities: 'Hoạt động gần đây',
    tuitionFee: 'Học phí cần trả',
    currentGPA: 'GPA hiện tại',
    todaysClasses: 'Lớp học hôm nay',
    recentActivity: 'Hoạt động gần đây',
    gpaTrend: 'Xu hướng GPA',
    unreadNotifications: 'Thông báo chưa đọc',
    unread:'Chưa đọc',
    
    // Status
    completed: 'Hoàn thành',
    inProgress: 'Đang học',
    overdue: 'Quá hạn',
    upcoming: 'Sắp tới',
    online: 'Trực tuyến',
    offline: 'Tại lớp',
    
    // Common
    loading: 'Đang tải...',
    error: 'Lỗi',
    success: 'Thành công',
    cancel: 'Hủy',
    save: 'Lưu',
    edit: 'Chỉnh sửa',
    delete: 'Xóa',
    search: 'Tìm kiếm',
    searchPlaceholder: 'Tìm kiếm khóa học, kết quả...',
  },
  en: {
    // Navigation
    dashboard: 'Dashboard',
    schedule: 'Schedule',
    marks: 'Marks',
    attendance: 'Attendance',
    finance: 'Finance',
    notifications: 'Notifications',
    profile: 'Profile',
    settings: 'Settings',
    seminar: 'Seminar',
    unread:'Unread',
    
    // Dashboard
    welcomeBack: 'Welcome back',
    academicOverview: 'Here\'s your academic overview for this semester',
    upcomingClasses: 'Upcoming Classes',
    recentActivities: 'Recent Activities',
    tuitionFee: 'Tuition Due',
    currentGPA: 'Current GPA',
    todaysClasses: 'Today\'s Classes',
    recentActivity: 'Recent Activity',
    gpaTrend: 'GPA Trend',
    unreadNotifications: 'Unread Notifications',
    
    // Status
    completed: 'Completed',
    inProgress: 'In Progress',
    overdue: 'Overdue',
    upcoming: 'Upcoming',
    online: 'Online',
    offline: 'Offline',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    searchPlaceholder: 'Search courses, results...',
  }
} as const;