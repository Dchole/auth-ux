const rearrangeUserKeys = (user: Record<string, any>) => {
  if (user) {
    const { photo, name, bio, phone, email } = user;

    return { photo, name, bio, phone, email };
  }

  return {};
};
export default rearrangeUserKeys;
