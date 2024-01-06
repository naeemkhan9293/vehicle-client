import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

export async function getBase64ImageUrl(imageUrl) {
  // fetch image and convert it to base64
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
	const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });
  const base64 = Buffer.from(minified).toString("base64")
  return `data:image/jpeg;base64,${base64}`;
}