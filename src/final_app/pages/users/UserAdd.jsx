import Form from "final_app/Form/Form";
import { userFields } from "final_app/Form/Form.config";
import Button from "shared/Button/Button";
import { useNavigate } from "react-router-dom";

export default function UserAdd() {
  const navigate = useNavigate();

  return (
    <main style={{ marginTop: "4rem", padding: "0rem 4rem" }}>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
      <Form formName="userForm" formFields={userFields} />
    </main>
  );
}
