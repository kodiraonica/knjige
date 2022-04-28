import { useStore } from "../store/Store";
import Form from "../Form/Form";
import { bookFields } from "../Form/form.config";

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
