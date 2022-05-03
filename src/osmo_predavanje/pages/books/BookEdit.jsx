import { useStore } from "osmo_predavanje/store/Store";
import Form from "osmo_predavanje/Form/Form";
import { bookFields } from "osmo_predavanje/Form/Form.config";

const BookEdit = (props) => {
  const [globalState, dispatch] = useStore();
  const bookId = props.match.params.bookId;
  const book = globalState.books[bookId];

  return (
    <div className="BookEdit">
      <Form edit={book} formName="bookForm" formFields={bookFields} />
    </div>
  );
};

export default BookEdit;
