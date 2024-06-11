import Message from "./Message/Message";

const Notification = () => {
  const notificationList = [
    {
      userName: "KK Hong",
      content: "Measure action your user interface to make sense",
      messageTime: new Date(
        "Tue Jun 11 2024 11:00:48 GMT+0800 (China Standard Time)"
      ),
    },
    {
      userName: "KK Hong",
      content: "Measure action your user interface to make sense",
      messageTime: new Date(
        "Tue Jun 11 2024 13:00:48 GMT+0800 (China Standard Time)"
      ),
    },
  ];

  return (
    <div className="w-[260px] text-gray-600 p-4">
      <h1 className="font-semibold text-xl pb-2">Notification</h1>
      <ul>
        {notificationList.map((e, i) => (
          <li key={i}>
            <Message message={e} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
