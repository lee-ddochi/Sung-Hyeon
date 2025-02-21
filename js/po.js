function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    // 랜덤 위치 설정 (전체 화면 기준)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // 랜덤 크기 설정
    const size = Math.random() * 3 + 2; // 2px ~ 5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // 랜덤 반짝이는 속도 설정
    const duration = Math.random() * 2 + 1; // 1s ~ 3s
    star.style.animationDuration = `${duration}s`;

    document.body.appendChild(star);
  }

  // 여러 개의 별 생성
  for (let i = 0; i < 100; i++) {
    createStar();
  }