import Buttons from "./auth/buttons";
import Fields from "./auth/fields";
import Form from "./auth/form";
import Input from "./auth/input";
import Select from "./auth/select";
import useQuotes from "./hooks/useQuotes";

export default function Dashboard() {
  const { quote } = useQuotes()
  return (
    <div>
      {quote?.quote}<br/><br/><br/>
        <div className="top flex justify-between items-center">
          <h3>Your Tasks</h3>
          <Buttons className="rounded-lg p-1 bg-[#00d44e] cursor-pointer">Log out</Buttons>
        </div>
      <Form>
        <Fields>
          <Input 
          type="text" 
          name="Task_title" 
          placeholder="Task title"/>
        </Fields>
        <Fields>
          <Input type="text" name="description" placeholder="Description (Optional)"/>
        </Fields>
        <Select name="priority" className="w-full border border-[#ccc] rounded-lg p-1 mb-4 outline-none">

        </Select>
      </Form>
    </div>
  );
};