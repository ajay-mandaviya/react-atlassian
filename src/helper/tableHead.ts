const head = {
  cells: [
    {
      key: "pic",
      content: "Profile",
    },
    {
      key: "firstname",
      content: "Firstname",
      isSortable: true,
    },
    {
      key: "lastname",
      content: "LastName",
      isSortable: true,
    },
    {
      key: "email",
      content: "Email",
    },
    {
      key: "company",
      content: "Company",
    },
    {
      key: "blood-group",
      content: "Blood Group",
    },
    {
      key: "phone",
      context: "Phone",
    },
    {
      key: "more",
      context: "More",
    },
  ],
};

export function createKey(name: string) {
  return name ? name.replace(/^(the|a|an)/, "").replace(/\s/g, "") : name;
}


export default head;
