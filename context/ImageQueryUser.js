export const uploadUserImage = async (file, token) => {
  const formData = new FormData();
  formData.append("profileImage", file);
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/user-image-upload`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Media-Type": "multipart/form-data",
    },
    body: formData,
  });
  return await res.json();
};
