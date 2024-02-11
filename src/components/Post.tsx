import dayjs from "dayjs";

type Props = {
  item?: any;
};

const Post = ({ item }: Props) => {
  if (!item) {
    return (
      <li className="flex flex-col gap-3">
        <article className="">
          <div className="skeleton-animation animation-delay-200"></div>
          <p className="skeleton-animation animation-delay-300"></p>
          <span className="skeleton-animation animation-delay-400"></span>
          <span className="skeleton-animation animation-delay-500"></span>
        </article>
      </li>
    );
  } else {
    return (
      <li className="border-[1px] border-gray-700 rounded-lg hover:border-purple-600">
        <a className="h-full block" href={item.link} target="_blank">
          <img
            src={item.cover}
            alt=""
            className="aspect-video rounded-t-lg  border-gray-700 border-b-[1px]"
          />
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
  }
};

export default Post;
