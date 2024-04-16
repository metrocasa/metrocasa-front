import { Button } from '@/components/ui/button';

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export const NewPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <div className="text-white">
      NEW POST SECTION
      {/* JODIT EDITOR */}
      <JoditEditor
        ref={editor}
        value={content}
        className="text-black h-[600px]"
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
      <Button variant="primary" className="self-end mt-4">
        Publish
      </Button>
    </div>
  );
};
