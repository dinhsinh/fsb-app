import { colors, colorClasses } from '@/lib/colors';

export function ColorDemo() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Bảng màu hệ thống</h2>
      
      {/* Màu chủ đạo */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Màu chủ đạo</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-orange-500 text-white rounded-lg">
            <div className="font-medium">Cam tươi</div>
            <div className="text-sm opacity-90">#ff6b35</div>
            <div className="text-xs mt-1">Màu nhấn chính, nút hành động</div>
          </div>
          <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
            <div className="font-medium text-gray-900">Trắng</div>
            <div className="text-sm text-gray-600">#ffffff</div>
            <div className="text-xs mt-1 text-gray-500">Nền card, component</div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="font-medium text-gray-900">Xám nhạt</div>
            <div className="text-sm text-gray-600">#f9fafc</div>
            <div className="text-xs mt-1 text-gray-500">Nền trang chính</div>
          </div>
        </div>
      </div>

      {/* Màu nhấn */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Màu nhấn phân loại</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-green-500 text-white rounded-lg">
            <div className="font-medium">Xanh lá</div>
            <div className="text-sm opacity-90">#22c55e</div>
            <div className="text-xs mt-1">Trạng thái tốt, hoàn thành</div>
          </div>
          <div className="p-4 bg-blue-500 text-white rounded-lg">
            <div className="font-medium">Xanh dương</div>
            <div className="text-sm opacity-90">#3b82f6</div>
            <div className="text-xs mt-1">Liên kết, thông tin</div>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg">
            <div className="font-medium">Đỏ</div>
            <div className="text-sm opacity-90">#ef4444</div>
            <div className="text-xs mt-1">Cảnh báo, khẩn cấp</div>
          </div>
        </div>
      </div>

      {/* Demo badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Badge Examples</h3>
        <div className="flex gap-3 flex-wrap">
          <span className="badge-success">Hoàn thành</span>
          <span className="badge-info">Đang học</span>
          <span className="badge-warning">Quá hạn</span>
          <span className="badge-primary">Sắp tới</span>
        </div>
      </div>

      {/* Demo buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Button Examples</h3>
        <div className="flex gap-3 flex-wrap">
          <button className={colorClasses.btnPrimary}>
            Nộp bài tập
          </button>
          <button className={colorClasses.btnSecondary}>
            Xem chi tiết
          </button>
          <button className={colorClasses.btnSuccess}>
            Hoàn thành
          </button>
        </div>
      </div>

      {/* Demo cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Card Examples</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h4 className="font-medium text-gray-900">Lớp sắp tới</h4>
            <p className="text-sm text-gray-600 mt-1">PRN231 - 08:00 AM</p>
            <span className="inline-block mt-2 badge-info">Online</span>
          </div>
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <h4 className="font-medium text-orange-900">Học phí cần trả</h4>
            <p className="text-lg font-bold text-red-500 mt-1">15,500,000₫</p>
            <span className="inline-block mt-2 badge-warning">Quá hạn</span>
          </div>
        </div>
      </div>
    </div>
  );
}