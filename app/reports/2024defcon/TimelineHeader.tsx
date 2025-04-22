export const TimelineHeader = ({ text }: { text: string }) => (
  <div className="flex items-center mt-10 mb-6">
    <div className="bg-gradient-to-br from-gray-100/70 via-white to-white px-5 py-1.5 rounded-full shadow border border-blue-100 z-10 flex items-center">
      <span className="font-medium text-[13px] text-[#1a5fb4] uppercase">
        {text}
      </span>
    </div>
    <div className="flex-grow h-px bg-gradient-to-r from-blue-600/30 to-transparent -ml-2.5" />
  </div>
)
