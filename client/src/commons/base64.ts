/**
 * base64からBLOB作成
 * @param base64
 * @param mimeCtype
 */
export const toBlob = (base64: string, mimeCtype: string) => {
  // 日本語の文字化けに対処するためBOMを作成する。
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);

  const bin = atob(base64.replace(/^.*,/, ''));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) {
    buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  let blob;
  try {
    blob = new Blob([bom, buffer.buffer], {
      type: mimeCtype,
    });
  } catch (e) {
    return false;
  }
  return blob;
};

export const toBlobBomNone = (base64: string, mimeCtype: string) => {
  const bin = atob(base64);

  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) {
    buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  let blob;
  try {
    blob = new Blob([buffer.buffer], {
      type: mimeCtype,
    });
  } catch (e) {
    return false;
  }
  return blob;
};
