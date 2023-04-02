
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
     
      const pdf = new window.jspdf.jsPDF();

      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
   
      pdf.save('webpage.pdf');
    });
  });