import firebase from "@/lib/firebase";

const uploadImage = async (file: File) => {
  const imageRef = firebase.storage().ref();

  return imageRef
    .child(`images/${file.name}`)
    .put(file)
    .then(({ ref }) => ref.getDownloadURL());
};

export default uploadImage;
