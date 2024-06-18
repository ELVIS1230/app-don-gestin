// import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Result } from 'antd';

const Custom404 = () => {


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Result
        status="404"
        title="404"
        subTitle="La pagina que visita no existe"
        extra={<Link href="/auth/login" className="border-2 bg-black text-white px-3 py-2 text-xl rounded-md ">
          Atras
        </Link>}
      />
    </div>
  );
};

export default Custom404;