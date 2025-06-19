export type BookType = {
  title: string;
  author: string;
  bookPid: string;
  addedBy: string;
  imageUrl: string;
  language: string;
  publishYear: number;
  genres: [string];
};

export type NewBookType = {
  title: string;
  author: string;
  language: string;
  publishYear: number;
  genres: [string];
};

export type UserType = {
  userPid: string;
};
