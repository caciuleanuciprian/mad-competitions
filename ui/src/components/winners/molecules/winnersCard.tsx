import { Image, useDisclosure } from "@chakra-ui/react";
import WinnersName from "../atoms/winnersName";
import WinnersPrize from "../atoms/winnersPrize";
import WinnersTicket from "../atoms/winnersTicket";
import Card from "../../ui/card/card";
import { DeleteBtn } from "../../ui/card/deleteBtn";
import { useRecoilState } from "recoil";
import { isAdminAtom } from "../../navigation/utils/navigation.recoil";
import { BasicModal } from "../../ui/modal";

interface WinnersCardProps {
  competitionName: string;
  image: string;
  name: string;
  ticketNumber: string;
  width?: string;
}

const WinnersCard = ({
  competitionName,
  image,
  name,
  ticketNumber,
  width,
}: WinnersCardProps) => {
  const [isAdmin] = useRecoilState(isAdminAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDelete = () => {};
  const isLoading = false;
  return (
    <Card bg={"gray.900"} hover={""} width={width}>
      <BasicModal
        isOpen={isOpen}
        onClose={onClose}
        onClick={handleDelete}
        isLoading={isLoading}
        title="Delete Winner"
        body="Are you sure you want to delete this winner? You will not be able to recover it after it's gone."
      />
      {isAdmin && <DeleteBtn onClick={onOpen} />}
      <Image
        w={"100%"}
        h={"100%"}
        maxH={"550px"}
        objectFit={"cover"}
        src={image}
        alt="winner"
        borderTopRadius={"md"}
      />
      <WinnersName name={name} />
      <WinnersPrize prize={competitionName} />
      <WinnersTicket ticket={ticketNumber} />
    </Card>
  );
};

export default WinnersCard;
