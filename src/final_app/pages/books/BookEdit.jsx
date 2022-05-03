import { useStore } from "final_app/store/Store";
import Form from "final_app/Form/Form";
import { bookFields } from "final_app/Form/Form.config";
import { useNavigate } from "react-router-dom";
import Button from "shared/Button/Button";

const BookEdit = (props) => {
  const navigate = useNavigate();
  const [globalState, dispatch] = useStore();
  const bookId = props.match.params.bookId;
  const book = globalState.books[bookId];

  return (
    <main style={{ marginTop: "4rem", padding: "0rem 4rem" }}>
      <div className="BookEdit">
        <Button onclick={() => navigate(-1)}>Go Back</Button>
        <Form edit={book} formName="bookForm" formFields={bookFields} />
      </div>
    </main>
  );
};

export default BookEdit;
