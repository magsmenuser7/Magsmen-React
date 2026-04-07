import bctproposal from '/assets/BCT - Magsmen Proposal - G.pdf';

const BctProposal = () => {
  return (
    <div className="bctproposal">
      {/* <h1>Proposal for BCT</h1> */}
      <iframe
        src={`${bctproposal}#toolbar=0&navpanes=0&scrollbar=0`}
        width="100%"
        height="900px"
        title="BCT Proposal"
      />
    </div>
  );
};

export default BctProposal;