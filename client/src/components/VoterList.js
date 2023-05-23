import { useEffect, useState } from "react";
function VoterList({ state }) {
  const [voterlists, setvoterlists] = useState([]);
  useEffect(() => {
    const { contract } = state;
    async function Voter() {
      const voters = await contract.methods.voterList().call();
      // console.log(voters);
      setvoterlists(voters);
    }
    contract && Voter();
  }, [state]);
  return <table>
      <tbody>
        {voterlists.map((voter) => {
          return (
            <tr>
              <td>{voter.voterId}</td>
              <td> {voter.name}</td>
              <td> {voter.voteCandidateId}</td>
            </tr>
          )
        })}
      </tbody>
    </table>;
  
}
export default VoterList;
