export interface TodoInterface {
  id: number;
  name: string;
  tags: string[];
  isCompleted = Boolean;
  isDeleted = Boolean;
}
