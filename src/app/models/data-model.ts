export interface ISchemaModel {
  def: string;
  header: string;
}
export interface IDataSourceModel {
  id: number;
  username: string;
  name: string;
  phone: string;
  email: string;
  website?: string;
  isActionActive?: boolean;
}
