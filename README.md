# nextjs13_google_adsense

This Package Helps reload ad on Every Page change in the nextjs 13 application and above.

Before using this package add this code in `head` of your root layout file.

```jsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
  crossOrigin="anonymous"
  strategy="lazyOnload"
/>
```

From Google You May Get this type code for ad unit which should be changed.

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
<!-- Homepage Leaderboard -->
<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-1234567890123456" data-ad-slot="1234567890"></ins>
<script>
(window.adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

It should be changed to like this in your page

```jsx
import GoogleAdUnit from 'nextjs13_google_adsense'

export default function MyPage() {
  return <>
  <div>Test Title</div>
  <GoogleAdUnit>
    <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-1234567890"
          data-ad-slot="123456"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
  </GoogleAdUnit>
  <div>Test Content
  <>;
}
```

