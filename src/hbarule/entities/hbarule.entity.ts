import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Hbarule {
  @PrimaryColumn({
    name: 'line_number',
    generated: false,
  })
  lineNumber: number;

  @Column({ name: 'type' })
  type: string;

  @Column({ name: 'database', array: true })
  databases: string[];

  @Column({ name: 'user_name', array: true })
  users: string[];

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'netmask' })
  netmask: string;

  @Column({ name: 'auth_method' })
  authMethod: string;

  @Column({ name: 'options', array: true })
  options: string[];
}
