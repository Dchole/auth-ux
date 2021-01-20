const matchRegex = (field: string, rule: string) =>
  `${field} must contain at least one ${rule} character`;

export default matchRegex;
