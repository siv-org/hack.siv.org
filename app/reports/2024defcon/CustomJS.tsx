import { useEffect } from 'react'

export const CustomJS = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const animationDuration = 300 // Match CSS animation duration in ms

      document.querySelectorAll('details').forEach((detail) => {
        const summary = detail.querySelector('summary')
        const toggleButton = detail.querySelector('.details-toggle')

        if (summary && toggleButton) {
          // 1. Update button text on state change
          detail.addEventListener('toggle', () => {
            // Only update text; don't interfere with animation logic
            toggleButton.textContent = detail.open
              ? 'Hide Details'
              : 'Show Details'
          })

          // Initialize button text
          toggleButton.textContent = detail.open
            ? 'Hide Details'
            : 'Show Details'

          // 2. Handle clicks on the summary (but not the button inside it)
          summary.addEventListener('click', (event) => {
            // Ignore clicks originating from the button itself
            if (
              event.target === toggleButton ||
              toggleButton.contains(event.target)
            ) {
              return
            }

            event.preventDefault() // Prevent default instant toggle
            handleToggle(detail) // Use shared toggle logic
          })

          // 3. Handle clicks specifically on the button
          toggleButton.addEventListener('click', (event) => {
            event.preventDefault() // Prevent default button action
            event.stopPropagation() // Stop click from reaching summary listener
            handleToggle(detail) // Use shared toggle logic
          })
        }
      })

      // Shared function to handle the toggle with animation
      function handleToggle(detailElement) {
        if (detailElement.open) {
          // Start closing animation
          detailElement.classList.add('closing')
          setTimeout(() => {
            detailElement.removeAttribute('open')
            detailElement.classList.remove('closing')
          }, animationDuration)
        } else {
          // Open instantly (animation is handled by CSS on open)
          detailElement.setAttribute('open', '')
        }
      }
    })
  }, [])
}
