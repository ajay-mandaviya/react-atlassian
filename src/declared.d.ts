interface User {
  firstName: string;
  lastName: string;
  maidenName: string;
  username: string;
  birthDate: string;
  height: string | number;
  weight: string | number;
  id: number;
  age: number;
  phone: string;
  email: string;
  image: string;
  gender: string;
  university: string;
  company: Company;
  bloodGroup: string;
  address: Address;
  domain: string;
}
interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}
