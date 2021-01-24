const upload = async (formData: FormData) => {
  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  if (res.ok) {
    console.log(data);
  }
};

export default upload;
