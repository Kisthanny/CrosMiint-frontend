import Avatar from "@/app/components/Avatar/Avatar";
import useColorChangeOnPress from "@/app/hooks/useColorChangeOnPress";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

// Use this plugin to get a more humane expression
dayjs.extend(relativeTime);

const getRelativeTime = (date: Date): string => {
  // convert Date instance to Day.js instance
  const now = dayjs();
  const targetDate = dayjs(date);

  // return relative time string
  return now.to(targetDate);
};

const Message = ({
  message,
}: {
  message: { userName: string; content: string; messageTime: Date };
}) => {
  const { isPressed, elementRef } = useColorChangeOnPress<HTMLDivElement>();

  const containerClasses = isPressed ? "bg-grey-main text-white" : "bg-white";

  return (
    <div
      ref={elementRef}
      className={`rounded-md flex items-start gap-2 p-2 relative ${containerClasses} transition-colors duration-150`}
    >
      <i className="absolute right-3 top-3 w-2 h-2 bg-[#6772ff] bg-gradient-to-br from-[#00f9e5] rounded-full"></i>
      <Avatar />
      <div>
        <p className="font-semibold">{message.userName}</p>
        <small className="">{message.content}</small>
        <br />
        <small className="text-gray-400">
          {getRelativeTime(message.messageTime)}
        </small>
      </div>
    </div>
  );
};

export default Message;
