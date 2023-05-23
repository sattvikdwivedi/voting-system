import{useState,useEffect} from "react";
function CandidateDisplay({state}) {
const[candidate,setcandidate] =useState([]);
useEffect(()=>{
  const{contract}=state;
  async function candidateDisplay(){
    const candidates =await contract.methods.candidateList().call();
    console.log(candidates);
    setcandidate(candidates);

  }
  contract && candidateDisplay();

},[state]);




  return <>

    <table>
      <tbody>
      {candidate.map((candi)=>{
        return (
          <tr>
          <td>
          {candi.name}
        </td>
        <td>
        {candi.party}
        </td>
        </tr>
        )


      })}

      </tbody>
    </table>
  </>;
}
export default CandidateDisplay;
