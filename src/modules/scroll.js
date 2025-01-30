/**
 * Smoothly scrolls to the specified element or position.
 *
 * @param {HTMLElement|number} target - The element or vertical position to scroll to.
 * @param {number} [duration=500] - Scroll duration in milliseconds.
 * @returns {void}
 */
export function smoothScrollTo(target, duration = 500) {
    try {
        const start = window.scrollY;
        const end = typeof target === 'number' ? target : target.offsetTop;
        const distance = end - start;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            window.scrollTo(0, start + distance * progress);

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    } catch (error) {
		console.error('Failed to smoothly scroll to target.', error);
    }
}
