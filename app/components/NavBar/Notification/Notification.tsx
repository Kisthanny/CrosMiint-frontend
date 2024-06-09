import svgs from "@/app/assets/svgs";

const Notification = () => {
  return (
    <div>
      <div>
        <svgs.Avatar size={50}></svgs.Avatar>
        <p>KK Hong</p>
        <p>Measure action your user</p>
        <p>3 minutes ago</p>
      </div>
    </div>
  );
};

export default Notification;
