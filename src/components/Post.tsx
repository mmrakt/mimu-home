import dayjs from "dayjs";

type Props = {
  item?: any;
};

const Post = ({ item }: Props) => {
  return (
    <li className="border-[1px] border-gray-700 rounded-lg hover:border-purple-600">
      <a className="h-full block" href={item.link} target="_blank">
        <div className="h-40 rounded-t-lg bg-gray-700  border-gray-700 border-b-[1px] overflow-clip">
          <img
            src={item.cover}
            alt=""
            className="object-cover h-full mx-auto"
          />
        </div>
        <div className="p-2">
          <h3 className="text-sm font-bold">{item.title}</h3>
          <p className="text-xs mt-2">{item.excerpt}</p>
          <p className="text-xs mt-2 text-gray-400">{item.domain}</p>
          <p className="text-xs mt-1 text-gray-400">
            {dayjs(item.lastUpdate).format("YYYY-MM-DD")}
          </p>
        </div>
      </a>
    </li>
  );
};

export default Post;
