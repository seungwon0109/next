import Image from 'next/image';

export default function Home() {
  return (
    <html>
      <body>
        <div class="navbar">
          <div class="logo">Next</div>
          <div class="navbar-links">
            <a href="#">홈</a>
            <a href="#">서비스</a>
            <a href="#">소개</a>
            <a href="#">연락처</a>
          </div>
        </div>

        <div class="introduction">
          <h1>Nextjs란</h1>
          <p>
            Next.js는 풀스택 웹 어플리케이션을 구축하기 위한 React 프레임워크
            이다
          </p>
        </div>
      </body>
    </html>
  );
}
