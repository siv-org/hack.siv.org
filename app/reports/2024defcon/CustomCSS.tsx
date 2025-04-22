'use client'

export const CustomCSS = () => {
  return (
    <style jsx global>{`
      .apple-style {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
          'Helvetica Neue', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 500;
      }

      .apple-subtext {
        font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text',
          'Helvetica Neue', sans-serif;
        font-size: 1.05rem;
        letter-spacing: -0.01em;
        line-height: 1.5;
        color: #334155; /* slate-700 */
      }

      .supporter-message {
        background: rgba(255, 250, 245, 0.85);
        backdrop-filter: blur(16px);
        border-left: 3px solid #fbbf24;
        padding: 16px 20px;
        border-radius: 6px;
        margin-bottom: 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
      }

      .skeptic-message {
        background: rgba(250, 250, 255, 0.65);
        backdrop-filter: blur(14px);
        border-left: 3px solid #6366f1;
        padding: 16px 20px;
        border-radius: 6px;
        margin-bottom: 16px;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.02);
      }

      .supporter-message strong,
      .skeptic-message strong {
        display: block;
        font-size: 15px;
        margin-bottom: 4px;
        letter-spacing: -0.01em;
      }

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

      .space-y-12 > :not([hidden]) ~ :not([hidden]) {
        margin-top: 2rem;
      }

      /* Important from line 441 or so */
      .detailed-information-section details summary {
        cursor: pointer;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 1.2rem;
        color: #111827;
      }

      .detailed-information-section details summary span {
        font-size: 14px;
        font-weight: 400;
        color: #6b7280; /* muted gray */
        margin-left: 0.5rem;
      }

      /* Imported from line 1400 or so */
      .conclusion-details details summary::-webkit-details-marker {
        display: none;
      }

      details summary {
        user-select: none;
        cursor: pointer;
      }

      .space-y-12 > :not([hidden]) ~ :not([hidden]) {
        margin-top: 2rem;
      }

      /* Apple-style font smoothing */
      .details-toggle {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        cursor: pointer; /* Add pointer cursor */
      }

      /* Imported from line 1400 or so */
      .contribution-card {
        background: rgba(250, 250, 250, 0.95);
        border-radius: 8px;
        padding: 36px;
        margin: 24px 0;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(230, 230, 230, 0.4);
      }

      .contribution-card h3 {
        font-size: 26px;
        margin-top: 0;
        margin-bottom: 24px;
        font-weight: 500;
        color: #000;
        letter-spacing: -0.01em;
        line-height: 1.3;
        /* Add background, padding, and border-radius */
        background: #fafaf9; /* stone-50 */
        padding: 16px 20px 16px 20px; /* Increased top padding */
        border-radius: 8px; /* Round all corners */
        display: block; /* Ensure background spans width */
        border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* Slightly lighter border */
        margin: -36px -36px 24px -36px; /* Adjust margins to align with card padding */
      }

      /* Remove the underline */
      .contribution-card h3:after {
        content: none; /* Remove the pseudo-element */
      }

      .lead-text {
        font-size: 17px;
        line-height: 1.5;
        margin-bottom: 28px;
        color: #333;
        font-weight: 400;
        letter-spacing: -0.01em;
      }

      .action-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 20px;
        background: rgba(245, 245, 245, 0.8);
        border-radius: 6px;
        margin-bottom: 18px;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }

      .action-icon {
        color: #0066cc;
        flex-shrink: 0;
      }

      .note {
        background: rgba(250, 250, 250, 0.8);
        border-left: 2px solid #0066cc;
        padding: 14px 18px;
        margin-bottom: 28px;
        font-size: 15px;
        color: #555;
        letter-spacing: -0.01em;
      }

      .cta-text {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        color: #000000;
        margin-top: 24px;
        letter-spacing: -0.01em;
        line-height: 1.4;
        word-wrap: break-word;
        hyphens: auto;
      }

      @media (max-width: 768px) {
        .contribution-card {
          padding: 24px;
        }

        /* Adjust h3 margins for smaller padding */
        .contribution-card h3 {
          margin: -24px -24px 24px -24px;
        }

        .lead-text,
        .cta-text {
          font-size: 16px;
        }
      }

      .contribution-card a {
        color: #0066cc;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;
      }
    `}</style>
  )
}
