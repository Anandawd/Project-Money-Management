interface Transaction {
  id?: number;
  date: string;
  name: string;
  amount: number;
  category: string;
  type: string;
  wallet: string;
  note?: string;
}
