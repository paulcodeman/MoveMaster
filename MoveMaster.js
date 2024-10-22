(function() {
    // Глобальная переменная для отслеживания текущего максимального Z-индекса
    let currentMaxZIndex = 1;

    const defaults = {
        axis: 'xy',
        step: 1,
        grid: null,
        boundary: null,
        lock: null,
        inertia: false,
        speed: null,
        restrict: 'free',
        direction: null,
        snap: null
    };

    function activateMovement(el) {
        const axis = el.dataset.moveAxis || defaults.axis;
        const step = parseInt(el.dataset.moveStep) || defaults.step;
        const grid = parseInt(el.dataset.moveGrid) || defaults.grid;
        const boundary = el.dataset.moveBoundary || defaults.boundary;
        const lock = el.dataset.moveLock || defaults.lock;
        const inertia = el.dataset.moveInertia === "true";
        const speed = parseInt(el.dataset.moveSpeed) || defaults.speed;
        const restrict = el.dataset.moveRestrict || defaults.restrict;
        const direction = el.dataset.moveDirection || defaults.direction;
        const snap = el.dataset.moveSnap || defaults.snap;

        let startX, startY, currentX = 0, currentY = 0;
        let isDragging = false;

        // Начало перетаскивания
        el.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;

            // Если ось z присутствует, обновляем Z-индекс элемента
            if (axis.includes('z')) {
                currentMaxZIndex++;
                el.style.zIndex = currentMaxZIndex;
            }
        });

        // Обработка перемещения
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            let moveX = e.clientX - startX;
            let moveY = e.clientY - startY;

            // Обработка осей: проверяем каждый символ в оси (x, y, z)
            if (!axis.includes('x')) moveX = 0; // Если ось 'x' не указана, блокируем перемещение по X
            if (!axis.includes('y')) moveY = 0; // Если ось 'y' не указана, блокируем перемещение по Y

            // Если ось z указана, меняем Z-индекс при перемещении
            if (axis.includes('z')) {
                currentMaxZIndex++;
                el.style.zIndex = currentMaxZIndex;
            }

            // Сетка перемещения
            if (grid) {
                moveX = Math.round(moveX / grid) * grid;
                moveY = Math.round(moveY / grid) * grid;
            }

            // Границы перемещения
            if (boundary) {
                let boundaries = boundary.split(',').map(Number);
                let [minX, minY, maxX, maxY] = boundaries;
                moveX = Math.max(minX, Math.min(maxX, moveX));
                moveY = Math.max(minY, Math.min(maxY, moveY));
            }

            // Применение перемещения
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
            currentX = moveX;
            currentY = moveY;
        });

        // Завершение перетаскивания
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }

    function initializeMovableElements() {
        document.querySelectorAll('[data-movable="true"]').forEach((el) => {
            if (!el.hasAttribute('data-move-initialized')) {
                el.setAttribute('data-move-initialized', 'true');
                activateMovement(el);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', initializeMovableElements);
    const observer = new MutationObserver(initializeMovableElements);
    observer.observe(document.body, { childList: true, subtree: true });
})();
