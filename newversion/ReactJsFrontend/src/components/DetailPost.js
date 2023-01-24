export default function DetailPost({ postarray }) {
  return (
    <>
      {postarray.map((post) => (
        <div>{post.name_text}</div>
      ))}
    </>
  );
}
/*<p className="text-xl font-semibold text-gray-900"> `${post.name_post}` </p>
         <p className="text-xl font-semibold text-gray-900"> `${post.text_post}` </p>
         */
