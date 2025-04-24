'use client'

export const CustomCSS = () => {
  return (
    <style jsx global>{`
      /* Restore Content animations */
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideUp {
        from {
          opacity: 1;
          transform: translateY(0);
        }
        to {
          opacity: 0;
          transform: translateY(-10px);
        }
      }

      /* Apply animations - content inside details */
      details[open] > *:not(summary) {
        animation: slideDown 0.3s ease-out;
      }

      /* Style for closing animation */
      details.closing > *:not(summary) {
        animation: slideUp 0.3s ease-in;
      }

      details summary {
        cursor: pointer;
      }
    `}</style>
  )
}
