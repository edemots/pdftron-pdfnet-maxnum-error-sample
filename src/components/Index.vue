<script setup lang="ts">
import "../../public/webviewer/core/webviewer-core.min.js";
import "../../public/webviewer/core/pdf/PDFNet.js";

const license = import.meta.env.VITE_APP_PDFTRON_LICENSE_KEY;
const path = import.meta.env.BASE_URL + "webviewer";

async function downloadWithAnnotations() {
  Core.setWorkerPath(`${path}/core`);

  async function main() {
    const doc = await PDFNet.PDFDoc.createFromURL("https://pdftron.s3.amazonaws.com/downloads/pl/demo.pdf")
  }

  await PDFNet.runWithCleanup(main, license);
}
</script>

<template>
  <section>
    <article>
      <div id="preview">
        <iframe
          src="https://pdftron.s3.amazonaws.com/downloads/pl/demo.pdf"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </article>
    <article>
      <button @click="downloadWithAnnotations">
        Download with annotations
      </button>
    </article>
  </section>
</template>

<style scoped>
section {
  display: flex;
  height: 100vh;
  column-gap: 2rem;
}

section > article {
  flex: 1;
  display: flex;
  align-items: center;
}
section > article:first-of-type {
  justify-content: flex-end;
  align-items: stretch;
}

#preview {
  aspect-ratio: 21/29.7;
  width: 50%;
}
</style>
