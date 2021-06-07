WebViewer({
  path: 'http://localhost:8080/WebViewer/lib', // path to the PDFTron 'lib' folder on your server
  licenseKey: '',
  initialDoc: 'http://localhost:8080/bug.pdf',
  // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
}, document.getElementById('viewer'))
.then(instance => {
  const docViewer = instance.docViewer;
  docViewer.on('annotationsLoaded', () => {
    const field = instance.annotManager.getFieldManager().getField("Titre");
    field.flags.set("ReadOnly", true);
  });
});