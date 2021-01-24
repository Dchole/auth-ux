const uploadImage = async (
  userID: string,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files[0];

  const formData = new FormData();

  formData.append("file", file);
  formData.append("userID", userID);

  const res = await fetch("/api/upload", {
    method: "POST",

    body: formData
  });

  const upload = await res.json();

  if (res.ok) {
    console.log(upload);
    const photo = await fetch(`/api/get-profile-photo?id=${userID}`).then(res =>
      res.json()
    );

    console.log(photo);
  } else {
    console.error("Upload failed");
  }
};

export default uploadImage;
