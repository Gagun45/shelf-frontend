export type BookType = {
  title: string;
  author: string;
  bookPid: string;
  addedBy: string;
  imageUrl: string;
  language: string;
  publishYear: number;
};

export type NewBookType = {
  title: string;
  author: string;
  language: string;
  publishYear: number;
};

export type UserType = {
  userPid: string;
};
