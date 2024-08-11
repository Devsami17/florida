        // Select all canvas elements
        const canvases = document.querySelectorAll('canvas');
        const messages = document.querySelectorAll('.message');

        canvases.forEach((canvas, index) => {
            const ctx = canvas.getContext('2d');
            let isDrawing = false;

            // Adjust canvas size
            function resizeCanvas() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }

            // Initialize canvas size
            resizeCanvas();

            // Resize canvas when window is resized
            window.addEventListener('resize', resizeCanvas);

            canvas.addEventListener('mousedown', () => {
                isDrawing = true;
                messages[index].style.display = 'none'; // Hide the message when drawing starts
            });

            canvas.addEventListener('mouseup', () => {
                isDrawing = false;
                ctx.beginPath();
            });

            canvas.addEventListener('mousemove', (event) => {
                if (!isDrawing) return;

                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'black';

                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            });
        });