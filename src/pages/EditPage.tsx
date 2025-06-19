import EditBook from "@/components/EditBook";

import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();

  if (!id) {
    return <span>Wrong id</span>;
  }

  return <EditBook bookPid={id} />;
};
export default EditPage;
