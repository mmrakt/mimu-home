type RaindropApiResult = {
  result: boolean;
  items: Post[];
  count: number;
  collectionId: number;
};

type Post = {
  _id: number;
  link: string;
  title: string;
  excerpt: string;
  note: string;
  type: string;
  user: {
    $ref: string;
    $id: number;
  };
  cover: string;
  media: {
    link: string;
    type: string;
  };
};
