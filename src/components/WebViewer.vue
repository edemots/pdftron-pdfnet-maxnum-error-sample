<script setup lang="ts">
import { onMounted, ref } from "vue";
import WebViewer, { Core } from "@pdftron/webviewer";

const webviewer = ref();

const license = import.meta.env.VITE_APP_PDFTRON_LICENSE_KEY;
const path = import.meta.env.BASE_URL + "webviewer";

onMounted(() => {
  WebViewer(
    {
      fullAPI: true,
      licenseKey: license,
      path,
      initialDoc: "https://pdftron.s3.amazonaws.com/downloads/pl/demo.pdf",
      documentXFDFRetriever: () => JSON.parse(localStorage.getItem('commands') || '[]')
    },
    webviewer.value
  ).then((instance) => {
    instance.Core.annotationManager.addEventListener(
      "annotationChanged",
      (
        annotations: Core.Annotations.Annotation[],
        action: string,
        options: Core.AnnotationManager.AnnotationChangedInfoObject
      ) => {
        if (options.imported || annotations.length === 0) return;

        instance.Core.annotationManager
            .exportAnnotationCommand()
            .then((commands) => {
                const previousCommands = JSON.parse(localStorage.getItem('commands') || '[]')
                localStorage.setItem('commands', JSON.stringify([...previousCommands, commands]))
            });
      }
    );
  });
});
</script>

<template>
  <div id="webviewer" ref="webviewer"></div>
</template>

<style scoped>
#webviewer {
  height: 100vh;
}
</style>
