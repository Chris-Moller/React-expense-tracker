

const ProgressBar = (props) => {
  let barPercentage = '0%'
  let barPercentageNum = 0
  let colorAmount = "#5ae3b3"

  if (props.budget > 0) {
    barPercentage = Math.round((props.amountSpent / props.budget) * 100) + '%'
    barPercentageNum = Math.round((props.amountSpent / props.budget) * 100)

  }
  
  let barColor = "linear-gradient(#5ae3b3, #32a77e)"
  if (70 < barPercentageNum) {
    barColor = "linear-gradient(#e3c15a, #cd8d17)"
    colorAmount = "#e3c15a"
  }
  
  if (barPercentageNum > 100) {
    barColor = 'linear-gradient(#e35a5a, #cd1717)'
    colorAmount = "#e35a5a"
  }





  return (
    <>
    <div style={{ marginLeft: "auto", marginBottom: "5px", marginRight: "5px", color: colorAmount }}>{"$" + props.amountSpent + "/" + props.budget}</div>
      <div className="progressbar-div">
        <div className="bar-percent-fill" style={{ width: barPercentage, backgroundImage: barColor  }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
