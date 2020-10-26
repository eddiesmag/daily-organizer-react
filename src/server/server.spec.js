import {addNewTask, updateTask} from  "./server"

(async function myFunc(){
  await addNewTask({
    name: "foo",
    id: "1234"
  });

  await updateTask({
    id: "1234",
    name: "New Task name"
  });
}())