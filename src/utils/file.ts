// 根据文件后缀判断是不是 word, cell, slide, image
export const getFileType = (fileType: any) => {
  let docType = '';
  let fileTypesDoc = [
      'doc', 'docm', 'docx', 'docxf', 'dot', 'dotm',
      'dotx', 'epub', 'fodt', 'fb2', 'htm',
      'html', 'mht', 'odt', 'oform', 'ott',
      'oxps', 'pdf', 'rtf', 'txt', 'djvu', 'xml','xps'
  ]
  let fileTypesCsv = [
      'csv', 'fods', 'ods', 'ots', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlt', 'xltm', 'xltx',
  ]
  let fileTypesPPt = [
      'fodp', 'odp', 'otp', 'pot', 'potm', 'potx', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx',
  ]
  let fileTypeImage = [
    'jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'ico', 'webp', 'avif', 'tiff'
  ]
  let fileTypeVideo = ['mp4'];
  let fileTypeAudio = ['mp3'];
  if (fileTypesDoc.includes(fileType)) {
      docType = 'word';
  }
  if (fileTypesCsv.includes(fileType)) {
      docType = 'cell';
  }
  if (fileTypesPPt.includes(fileType)) {
      docType = 'slide';
  }
  if (fileTypeImage.includes(fileType)) {
    docType = 'image';
  }
  if (fileTypeVideo.includes(fileType)) {
    docType = 'video';
  }
  if (fileTypeAudio.includes(fileType)) {
    docType = 'audio';
  }
  return docType
}

// 通过文件名（包含后缀）获取文件类型
export const getFileSuffixType = (fileName: string) => {
  const suffix = fileName.split('.').pop()?.toLowerCase();
  const type = getFileType(suffix);
  if (type === 'word') {
    if (suffix === 'txt') return 'T';
    return 'W'
  }
  if (type === 'cell') return 'X';
  if (type === 'slide') return 'P';
  if (type === '') return '?';
  return type;
}

// 通过文件名（包含后缀）获取消息发送文件类型
export const getMsgFileType = (fileName: string) => {
  const suffix = fileName.split('.').pop()?.toLowerCase();
  const type = getFileType(suffix);
  // 图片文件为：3；其他文件为：2
  if (type === 'image') {
    return 3
  } else {
    return 2
  }
}

// 获取文件颜色
export const getFileColor = (fileName: string) => {
  const type = getFileSuffixType(fileName);
  const suffix = fileName.split('.').pop()?.toLowerCase();
  if (type === 'W' || type === 'T') {
    if (suffix === 'pdf') return '#F54A45'
    return '#3370FF'
  }
  if (type === 'X') return '#34C724';
  if (type === 'P') return '#FF8800';
  if (type === '?') return '#9CA3AD'
  return '#3370FF';
}

// 获取文件大小
export const getFileSize = (size: any) => {
  return ((size / 1024 ).toFixed(1) + ' KB');
}