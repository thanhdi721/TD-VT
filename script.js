document.addEventListener('DOMContentLoaded', () => {
    // Tự động phát nhạc nền
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        // Thử phát nhạc tự động
        backgroundMusic.play().catch(error => {
            // Nếu trình duyệt chặn autoplay, phát khi user tương tác lần đầu
            const playMusic = () => {
                backgroundMusic.play().catch(() => {});
                document.removeEventListener('click', playMusic);
                document.removeEventListener('touchstart', playMusic);
            };
            document.addEventListener('click', playMusic);
            document.addEventListener('touchstart', playMusic);
        });
    }

    const startDate = '2025-10-11 00:00:00';

    function updateLoveTimer() {
        const startDateObj = new Date(startDate);
        const currentDate = new Date();

        // Tính số ngày
        const timeDifference = currentDate.getTime() - startDateObj.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        // Tính giờ, phút, giây
        const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
        const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Định dạng 00:00:00
        const timeFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Cập nhật số ngày
        const daysElement = document.getElementById('love-days');
        if (daysElement) {
            daysElement.textContent = daysDifference;
        }

        // Cập nhật thời gian (00:00:00)
        const timeElement = document.getElementById('love-hours');
        if (timeElement) {
            timeElement.textContent = timeFormatted;
        }

        // Cập nhật title trang
        document.title = `${daysDifference} Ngày Yêu ❤️`;
    }

    // Cập nhật mỗi giây
    setInterval(updateLoveTimer, 1000);

    // Chạy lần đầu ngay khi tải trang
    updateLoveTimer();
});