import { Link } from "react-router-dom";

export default function PostList({ post_list }) {
  return (
    <div>
      {post_list ? (
        <div className="relative bg-gray-50 pb-8 px-4 sm:px-6 lg:pb-12 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {post_list.map((post) => (
                <div
                  key={post.id_post}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src="#" alt="" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <Link to="#" className="hover:underline">
                          "EFE"
                        </Link>
                      </p>
                      <Link
                        to={`/blog/post/${post.id_post}`}
                        className="block mt-2"
                      >
                        <p className="text-xl font-semibold text-gray-900">
                          {post.name_post}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.text_post}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
