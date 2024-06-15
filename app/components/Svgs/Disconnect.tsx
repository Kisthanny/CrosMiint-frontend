const Disconnect = ({
  color = "#000000",
  size = 16,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="28662"
      width={size.toString()}
      height={size.toString()}
    >
      <path
        d="M930.423233 137.286137l-43.76548-43.779507a8.584767 8.584767 0 0 0-11.754958 0l-78.553425 78.58148a205.473315 205.473315 0 0 0-115.571726-35.391124c-52.813151 0-105.626301 20.073205-145.941041 60.430028l-105.093261 105.135342a8.262137 8.262137 0 0 0 0 11.684822l280.211288 280.337534a8.13589 8.13589 0 0 0 5.933589 2.384658 8.725041 8.725041 0 0 0 5.807343-2.384658l105.09326-105.135342a206.651616 206.651616 0 0 0 25.080986-261.512767l78.553425-78.595507a8.388384 8.388384 0 0 0 0-11.754959z m-503.303014 268.049534c3.226301-3.226301 8.458521-3.226301 11.670795 0l37.495233 37.593425 0.96789 1.150246a8.262137 8.262137 0 0 1-0.981918 10.520548l-68.902575 68.818411 93.212055 93.127891 68.636054-68.692165a8.24811 8.24811 0 0 1 11.628713 0h0.056109l37.761754 37.383014c3.184219 3.226301 3.184219 8.416438 0 11.628712L549.873973 665.740274l44.35463 44.326575c3.226301 3.226301 3.226301 8.458521 0 11.670795l-105.093261 105.135342a205.922192 205.922192 0 0 1-145.99715 60.500165c-40.398904 0-80.797808-11.754959-115.515617-35.461261l-78.553424 78.58148a8.584767 8.584767 0 0 1-11.754959 0l-43.76548-43.779507a8.262137 8.262137 0 0 1 0-11.628712l78.553425-78.58148a206.651616 206.651616 0 0 1 25.080986-261.526794l104.952987-105.135343a8.711014 8.711014 0 0 1 5.807342-2.384657l1.332603 0.084164c1.72537 0.252493 3.366575 1.052055 4.615013 2.300493l44.354631 44.382685 68.846465-68.87452z m308.111781 333.333041l25.782356 60.79474c8.24811 19.413918 3.226301 33.483397-15.023342 42.194411l-2.454795 1.108164c-20.255562 8.598795-34.675726 2.763397-43.27452-17.492164l-25.796384-60.79474c-8.234082-19.413918-3.226301-33.483397 15.023343-42.194411l2.454794-1.108164c20.255562-8.598795 34.689753-2.763397 43.288548 17.492164z m89.78937-128.378739l64.315616 14.855013c20.550137 4.74126 28.980603 17.071342 25.291398 36.962192l-0.561096 2.637151c-4.937644 21.461918-18.137425 29.696-39.571288 24.744329l-64.315616-14.855014c-20.550137-4.74126-28.980603-17.057315-25.291398-36.962192l0.561096-2.637151c4.937644-21.44789 18.137425-29.696 39.571288-24.744328zM200.465534 269.536438l58.816877 29.976548c18.796712 9.580712 23.986849 23.566027 15.598466 41.984l-1.178302 2.42674c-9.987507 19.624329-24.786411 24.421699-44.382685 14.434192l-58.816876-29.976548c-18.796712-9.580712-23.986849-23.566027-15.598466-41.984l1.178301-2.42674c9.987507-19.624329 24.786411-24.435726 44.382685-14.448219z m171.176329-127.270575l14.855014 64.343671c4.74126 20.564164-2.637151 33.525479-22.135233 38.940055l-2.609096 0.659288c-21.433863 4.951671-34.633644-3.296438-39.585315-24.744329l-14.840986-64.343671c-4.74126-20.550137 2.637151-33.525479 22.121205-38.940055l2.609096-0.659288c21.44789-4.951671 34.647671 3.296438 39.585315 24.744329z"
        fill={color}
        p-id="28663"
      ></path>
    </svg>
  );
};

export default Disconnect;