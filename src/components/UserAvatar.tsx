import { FC } from "react";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback></AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
