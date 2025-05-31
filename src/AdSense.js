import React, { useEffect } from 'react';

const GoogleAd728x90 = () => {
  useEffect(() => {
    // Đẩy quảng cáo vào DOM
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'inline-block', width: '728px', height: '90px' }}
         data-ad-client="ca-pub-5183370140149927"
         data-ad-slot="1070169000" />
  );
};

export default GoogleAd728x90;
