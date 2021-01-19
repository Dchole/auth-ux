const rearrangeUserKeys = ({
  photo,
  name,
  bio,
  phone,
  email
}: Record<string, any>) => ({ photo, name, bio, phone, email });
export default rearrangeUserKeys;
