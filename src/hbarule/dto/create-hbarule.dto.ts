export class CreateHbaruleDto {
  type: string;

  databases: string[];

  users: string[];

  address: string;

  netmask: string;

  authMethod: string;

  options: string[];
}
