 import { useEffect,useState } from "react";
 function Vote({state,account}){
   const[status,setstatus]=useState("NOT INITIATED");
 async function Voting(event){
  event.preventDefault();
  const{contract}=state;
  const voterId= document.querySelector("#voterId").value;
  const candidateId= document.querySelector("#candidateId").value;
   try{
    await contract.methods.vote(voterId,candidateId).send({
     from:account,
     gas:"1000000",
    });}
    catch(error){
    alert(error);
    }
   }
   useEffect(()=>
   {
    const {contract}=state; 
    async function votestatus(){
      const status=await contract. methods.votingStatus().call();
      setstatus(status);
    }
    contract && votestatus();


   }, [state])

  return (
    <div>
      <form className="form" onSubmit={Voting} >
        <p className="status">Voting Status:{status}</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;
