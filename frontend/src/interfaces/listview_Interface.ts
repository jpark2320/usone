export interface IListView {
  id: string;
  title: string;
  description: string;
  creator: {};
  image: {};
  region: string;
  category: string;
  like: number;
  view: number;
  updated_by: string; // or user obj
  created_by: string; // or user obj
  updated_at: Date;
  created_at: Date;
}
