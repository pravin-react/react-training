import React from 'react';
import ImageData from './ImageData.js';
import ImageRenderer from './ImageRenderer';

export default function Images() {
  return (
    <div>
      <h1>Lazy Load Images</h1>
      <section>
        {ImageData.map(data => (
          <ImageRenderer
            key={data.id}
            url={data.url}
            thumb={data.thumbnail}
            width={data.width}
            height={data.height}
          />
        ))}
      </section>
    </div>
  );
}
