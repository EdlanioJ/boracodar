'use client';

import File from './File';

export default function FilesPreview() {
  return (
    <section className="mt-5 grid gap-2">
      <File
        name="Scann_158.pdf"
        format="MB"
        size={76}
        progress={(35 / 76) * 100}
        uploadedSize={35}
        status="uploading"
      />
      <File
        name="README.md"
        status="done"
        format="KB"
        progress={(12 / 12) * 100}
        size={12}
        uploadedSize={12}
      />
      <File
        name="picture1.jpeg"
        status="error"
        format="MB"
        size={6.4}
        progress={(2 / 6.4) * 100}
        uploadedSize={2}
      />
    </section>
  );
}
