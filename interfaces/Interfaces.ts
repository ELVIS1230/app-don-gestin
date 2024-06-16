export interface TransactionsI {
  trasac_id: number,
  trasac_name: string
  trasac_description: string
  trasac_quantity: number;
  trasac_balance: number;
  createdAt: Date;
  ttrac_id_fk: any
  account_id_fk: any
  card_id_fk: any
  saving_id_fk: any
  card_id: any
}

export interface CardsI {
  card_id: string;
  card_name: string;
  card_description: string;
  card_quota: number;
  card_balance_total: number;
  card_balance_pay: number;
  card_date_cutoff: Date;
  card_date_due: Date;
  typecard_id_fk: any;
  bcard_id_fk: any;
  createdAt: Date;
  account_id_fk:any
  transactions:any
}