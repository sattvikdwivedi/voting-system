import VoterList from "./VoterList";
import Vote from "./Vote";
 function VoterRegister({state,account}) {  
 async function registers(event){
  event.preventDefault();
  const {contract}=state;
 const name =document.querySelector("#name").value;
 const age =document.querySelector("#age").value;
 const Gender =document.querySelector("#gender").value;
  try{
    await contract.methods.voterRegister(name,age,Gender).send({
      from:account,
      gas:"1000000",
    })
    alert("you are now voted");
    window.location.reload();
  }
  catch(error){
    alert(error);
  }
 }

  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit ={registers}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>

      </div>
       <VoterList state={state}> </VoterList>
       <Vote state={state} account ={account}> </Vote>
    </div>
  );
}
export default VoterRegister;
