// import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Custom404 = () => {


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Regresar atras</p>
      {/* <button onClick={() => router.push('/')}>Go Home</button> */}
      <br />
      <Link href="/home" className="border-2 bg-black text-white p-4 rounded-md ">
        Atras
      </Link>
    </div>
  );
};

export default Custom404;