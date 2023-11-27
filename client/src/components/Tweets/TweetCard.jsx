import { UserAvatar } from "../UI Elements/Avatar";

export const TweetCard = ({ userProfileSrc, tweet }) => (
  <div className="w-full p-4 border-b hover:bg-lighter flex">
    <div className="flex-none mr-4">
      <UserAvatar src={userProfileSrc} />
    </div>
    <div className="w-full">
      {/* Tweet Header Section */}
      <div className="flex items-center w-full">
        <p className="font-semibold">{tweet.name}</p>
        <p className="text-sm text-dark ml-2">{tweet.handle}</p>
        <p className="text-sm text-dark ml-2">{tweet.time}</p>
        <i className="fas fa-angle-down text-dark ml-auto"></i>
      </div>
      {/* Tweet Content */}
      <p className="py-2">{tweet.content}</p>
      <div className="flex items-center justify-between w-full">
        {/* Comments Count */}
        <div className="flex items-center text-sm text-dark">
          <i className="far fa-comment mr-3"></i>
          <p>{tweet.comments}</p>
        </div>
        {/* Retweets Count */}
        <div className="flex items-center text-sm text-dark">
          <i className="fas fa-retweet mr-3"></i>
          <p>{tweet.retweets}</p>
        </div>
        {/* Likes Count */}
        <div className="flex items-center text-sm text-dark">
          <i className="fas fa-heart mr-3"></i>
          <p>{tweet.likes}</p>
        </div>
        {/* Share Icon */}
        <div className="flex items-center text-sm text-dark">
          <i className="fas fa-share-square mr-3"></i>
        </div>
      </div>
    </div>
  </div>
);
